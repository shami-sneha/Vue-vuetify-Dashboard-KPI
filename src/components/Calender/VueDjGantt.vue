<template>
  <div
  ref="gantt"
  class="gantt"
  :style="{ height: px(componentHeight) }"
  @wheel="scrollBasic"
  >
  <div
  class="gantt-rows "
  @wheel="scrollRows"
  >
  <div
  v-for="(rowHeader, rowHeaderIndex) in list"
  :key="rowHeaderIndex"
  :style="{ width: px(rowHeader.width) }"
  class="gantt-row"
  >
  <div class="gantt-row-header">
    <div class="gantt-row-header-title">
      {{ rowHeader.header.content }}
    </div>
    <div class="gantt-row-header-dots">
      <div class="gantt-row-header-dots" />
    </div>
  </div>
  <div
  ref="rowlabel"
  class="gantt-row-header-data"
  :style="{ width: px(rowHeader.width), height: px(dataHeight) }"
  @mousemove="onRowsHeaderMove"
  >
  <div
  v-for="(row, rowIndex) in rows"
  :key="rowIndex"
  :class="{hovered: hoveredRowIndex == rowIndex}"
  class="gantt-row-header-data-row"
  @click="$emit('row', row)"
  @mouseenter="hoveredRowIndex = rowIndex"
  @mouseleave="hoveredRowIndex = -1"
  >
  {{ row[rowHeader.id] }}
</div>
</div>
</div>
</div>
<div
class="gantt-data"
@wheel="scrollData"
>
<div
ref="dataheader"
class="gantt-data-header"
@mousemove="onDataHeaderMove"
>
<div ref="datacalendar" class="gantt-data-header-calendar-wrap" >
  <div class="gantt-data-header-calendar" >
    <div
    v-for="(slot, slotIndex) in dataSlots.calendar"
    :key="slotIndex"
    :style="{width: px(Math.max(slot.width, 260)), left: px(slot.offset)}"
    class="gantt-data-header-calendar-date"
    >

    {{ slot.moment.format(calendarFormat) }}
  </div>
</div>
</div>
<div
ref="dataslots"

class="gantt-data-header-slots-wrap"
>
<div
class="gantt-data-header-slots"

>
<div
v-for="(slot, slotIndex) in dataSlots.slots"
:key="slotIndex"
:style="{  left: px(slot.offset) }"
class="gantt-data-header-slot"
@click="$emit('time-slot', slot)"
>
<div
v-if="isSlotHeaderInLine"
class="gantt-data-header-slot-label"
>
<span
v-for="(line, lineIndex) in labelDescription"
:key="lineIndex"
:style="{
fontSize: px(line.size || 14),
fontWeight: line.weight || 400,
}"
>
{{ slot.moment.format(line.str) }}
</span>
</div>
<div v-else class="gantt-data-header-slot-label">
  <div
  v-for="(line, lineIndex) in labelDescription"
  :key="lineIndex"
  :style="{
  fontSize: px(line.size || 14),
  fontWeight: line.weight || 400,

}"
>

<!-- {{ slot.moment.format(line.str) }} -->
{{slot.incremtVal}}
</div>
</div>
</div>
</div>
</div>
</div>
<div :style="{ height: px(dataHeight) }" class="gantt-data-wrap-with-scroll">
  <div ref="scrolly" class="gantt-data-y-scroll" @scroll="onYScroll">
    <div
    class="gantt-data-y-scroll-ref"
    :style="{ height: px(dataTotalHeight) }"
    />
  </div>
  <div
  ref="cells"
  :style="{  height: px(dataHeight) }"
  class="gantt-data-wrap"
  >
  <div
  ref="cellswrap"
  class="gantt-data-wrapped"
  :style="{ height: px(dataTotalHeight) }"
  @mousedown="onDataMouseDown"
  @mouseup="onDataMouseUp"
  @mousemove="onDataMove"
  @moseleave="selectFrom = selectTo = moveItem = resizeItem = null"
  >
  <div
  v-for="(cell, cellIndex) in cellsAndDataEditable.cells"
  :key="cellIndex"
  :style="{
  left: px(cell.x),
  top: px(cell.y),
  width: px(cell.width),
  height: px(cell.height),
  background: cell.background,
}"
:class="cell.classes"
class="gantt-data-cell calendercellcolor"
@click="$emit('cell', cell)"
/>

<div
v-for="(item, itemIndex) in cellsAndDataEditable.data"
:key="1e9 + itemIndex"
:style="{
left: px(item.x),
top: px(item.y),
width: px(item.width),
height: px(item.height),
background:
item.item.style && item.item.style.background
? item.item.style.background
: null,
cursor: item.item.moveable ? 'pointer' : null,
zIndex:
(moveItem && item.item == moveItem.item) ||
(resizeItem && item.item == resizeItem.item)
? 1000
: null,
}"
class="gantt-data-item"
@mousedown.stop="onItemMouseDown(item)"
@mouseup.stop="onItemMouseUp"
>
<div class="gantt-data-item-label">
  <img :src="image" class="userimagestyl">
  {{ item.item.label }}
</div>
<div
v-if="resizable ? item.item.resizable !== false : item.item.resizable"
class="gantt-data-item-resizer"
@mousedown.stop="onItemResizeMouseDown(item)"
@mouseup.stop="onItemResizeMouseUp"
>
⮕
</div>
</div>

<div
v-if="selectFrom && selectTo"
:style="{
left: `${Math.min(selectFrom.x, selectTo.x)}px`,
top: `${Math.min(selectFrom.y, selectTo.y)}px`,
width: `${Math.abs(selectTo.x - selectFrom.x)}px`,
height: `${Math.abs(selectTo.y - selectFrom.y)}px`,
}"
class="gantt-data-select"
/>
</div>
</div>
</div>
<div ref="scrollx" class="gantt-data-x-scroll" @scroll="onXScroll">
  <div
  class="gantt-data-x-scroll-ref"
  :style="{ width: px(dataTotalWidth) }"
  />
</div>
</div>
</div>
</template>

<script>
import image from "@/assets/userimg.png";
import moment from "moment";

const colHeight = 38;
const week_LONG = 86400000;
const HOUR_LONG = 3600000;

const zoomParams = {

  10: {
    slot: week_LONG,
    width: 64,

    label: [
    { str: "DD", size: 15 },

    ],
    calendar: "MMMM YYYY",
  },
};

export default {
  name: "VueDjGantt",

  props: {
    from: {},
    to: {},

    locale: {
      type: String,
      default: 'en',
    },

    height: {
      type: Number,
      default: null,
    },

    list: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: Array,
      default: () => [],
    },

    items: {
      type: Array,
      default: () => [],
    },

    id: {
      type: Array,
      default: () => [],
    },

    cells: { type: Object },
    snapStartFunction: { type: Function },
    snapEndFunction: { type: Function },
    canSelectFunction: { type: Function },

    moveable: {
      type: Boolean,
      default: false,
    },

    resizable: {
      type: Boolean,
      default: false,
    },

    selectable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      image:image,
      width: 10,
      zoom: 10,
      xOffset: 0,
      yOffset: 0,
      drag: false,
      dragRef: 0,
       valcount: 1,
      cellsAndDataEditable: {},
      moveItem: null,
      resizeItem: null,
      selectFrom: null,
      selectTo: null,
      selectedCellsBox: {},
      selectedCells: {},
      hoveredRowIndex: -1,

      fromTime: this.from ? moment(this.from) : moment().startOf('week').add(0, 'weeks'),
      toTime: this.to ? moment(this.to) : moment().startOf('week').add(12, 'months'),
    };
  },

  methods: {
    px(n) {
      return `${n}px`
    },
    increment() {
    
        for(let i = 0; i < 30; i++){
              this.valcount++
   
      }
         // console.log("Increment Value Call ", this.valcount)
    },

    get(object, keys, defaultVal = null) {
      keys = Array.isArray(keys) ? keys : keys.replace(/(\[(\d)\])/g, '.$2').split('.');
      object = object[keys[0]];

      if (object && keys.length > 1) {
        return this.__get(object, keys.slice(1), defaultVal);
      }

      return object === undefined ? defaultVal : object;
    },

    scrollBasic(ev) {
      if (ev.ctrlKey) {
        ev.stopPropagation()
        ev.preventDefault()
      }
    },

    scrollData(ev) {
      if (ev.ctrlKey) {
        const zoom = (modifie) => {
          const dataWidth = this.dataWidth;
          const halfDataWidth = dataWidth / 2;
          const w1 = Math.max(this.dataTotalWidth, dataWidth);
          const o1 = this.xOffset + halfDataWidth;
          this.zoom += modifie;
          let w2 = Math.max(this.dataTotalWidth, dataWidth);
          this.scrollX(~~Math.max(0, ((o1 * w2) / w1) - halfDataWidth));
        }

        if (ev.deltaY > 0 && this.zoom > 8) {
          zoom(-1);
        }

        if (ev.deltaY < 0 && this.zoom < 16) {
          zoom(+1);
        }

        this.$emit('zoom', this.zoom);
      } else {
        this.scrollX(this.$refs.scrollx.scrollLeft + ev.deltaX * 10);
        this.scrollY(this.$refs.scrolly.scrollTop + ev.deltaY * 10);
      }
    },

    scrollRows(ev) {
      this.scrollY(this.$refs.scrolly.scrollTop + ev.deltaY * 10);
    },

    scrollX(scrollLeft) {
      let x = Math.max(0, Math.min(this.dataTotalWidth - this.dataWidth, scrollLeft));
      this.xOffset = x;
      this.$refs.scrollx.scrollLeft = x;
      this.$refs.datacalendar.scrollLeft = x;
      this.$refs.dataslots.scrollLeft = x;
      this.$refs.cells.scrollLeft = x;
      this.$emit('scroll-x', x);
    },

    scrollY (scrollTop) {
      let y = Math.max(0, Math.min(this.dataTotalHeight - this.dataHeight, scrollTop));
      this.yOffset = y;
      this.$refs.scrolly.scrollTop = y;
      this.$refs.cells.scrollTop = y;
      this.$emit('scroll-y', y);

      if (this.$refs.rowlabel) {
        this.$refs.rowlabel.forEach(el => el.scrollTop = y);
      }
    },

    onXScroll (ev) {
      this.scrollX(ev.target.scrollLeft);
    },

    onYScroll (ev) {
      this.scrollY(ev.target.scrollTop);
    },

    onDataHeaderMove (ev) {
      if (ev.buttons == 1) {
        this.scrollX(this.xOffset - ev.movementX);
      }
    },

    onRowsHeaderMove (ev) {
      if (ev.buttons == 1) {
        this.scrollY(this.yOffset - ev.movementY);
      }
    },

    onItemMouseDown (item) {
      this.$emit("item", item);

      if (this.moveable ? item.item.moveable !== false : item.item.moveable) {
        this.moveItem = item;
      }
    },

    onItemMouseUp () {
      this.moveItem = null;
    },

    onItemResizeMouseDown (item) {
      this.$emit("item", item);

      if (this.resizable ? item.item.resizable !== false : item.item.resizable) {
        this.resizeItem = item;
      }
    },

    onItemResizeMouseUp () {
      this.resizeItem = null;
    },

    onDataMouseDown (ev) {
      this.moveItem = this.resizeItem = null;

      if (this.selectable) {
        this.selectFrom = this.getDataCoordinates(ev, this.$refs.cellswrap);

        if (!ev.ctrlKey) {
          this.selectedCells = {};
          this.$emit("selected-cells", {});
        }
      }
    },

    onDataMouseUp (ev) {
      if (this.selectFrom && this.selectTo) {
        for (let k in this.selectedCellsBox) {
          this.selectedCells[k] = this.selectedCellsBox[k];

        }

        this.$emit("selected-cells", this.selectedCells);
      }

      this.selectFrom = this.selectTo = this.moveItem = this.resizeItem = null;
    },

    onDataMove (ev) {
      if (ev.buttons == 1) {
        if (this.resizeItem) {
          let deltaX = Math.round(ev.movementX / this.pxPerMs)
          let time = this.resizeItem.item.time.end + deltaX;

          if (this.snapEndFunction) {
            time = this.snapEndFunction(this.resizeItem.item.time.end, deltaX, this.resizeItem.item) || time
          }

          this.resizeItem.item.time.end = time
          this.resizeItem.width += deltaX

          this.$emit('resized', {
            item: this.resizeItem,
            deltaX,
          })
        } else if (this.moveItem) {
          let deltaX = Math.round(ev.movementX / this.pxPerMs)
          let time = this.moveItem.item.time.start + deltaX
          let refFrom = moment(this.fromTime).startOf("week")

          if (this.snapStartFunction) {
            time = this.snapStartFunction(this.moveItem.item.time.start, deltaX, this.moveItem.item) || time
          }

          let diff = time - this.moveItem.item.time.start
          this.moveItem.item.time.start = time
          this.moveItem.item.time.end += diff
          this.moveItem.x += deltaX

          this.$emit('moved', {
            item: this.resizeItem,
            deltaX,
          })
        } else if (this.selectFrom) {
          this.selectTo = this.getDataCoordinates(ev, this.$refs.cellswrap)
        }
      }
    },

    getDataCoordinates (event, referenceElement) {
      const position = {
        x: event.pageX,
        y: event.pageY
      };

      const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop
      };

      let reference = referenceElement.offsetParent;

      while(reference){
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
      }

      return {
        x: position.x - offset.left + this.xOffset,
        y: position.y - offset.top + this.yOffset,
      };
    },

    clearSelection () {
      this.selectFrom = null
      this.selectTo = null
      this.selectedCellsBox = {}
      this.selectedCells = {}
      this.$emit("selected-cells", {})
    },
  },

  computed: {
    headerRowsWidth () {
      return Object.values(this.list || {}).reduce((acc, cur) => acc + cur.width, 0)
    },

    componentHeight () {
      return Math.max(72, this.height || (this.dataTotalHeight + 60));
    },

    dataHeight () {
      return Math.max(0, this.componentHeight - 52);
    },

    dataWidth () {
      return this.width - this.headerRowsWidth;
    },

    dataTotalHeight () {
      return Object.keys(this.rows).length * colHeight;
    },

    dataTotalWidth () {
      return this.dataTotalSlots * zoomParams[this.zoom].width;
    },

    dataTotalSlots () {
      let delta = Math.max(this.toTime.valueOf() - this.fromTime.valueOf(), 0);
      return Math.floor(delta / zoomParams[this.zoom].slot);
    },

    dataSlotWidth () {
      return zoomParams[this.zoom].width
    },

    dataSlots () {
      let from = moment(this.fromTime).locale(this.locale).startOf("week");
      let slotPeriod = zoomParams[this.zoom].slot;
      let slotWidth = zoomParams[this.zoom].width;
      let slotsCount = ~~((this.toTime.valueOf() - this.fromTime.valueOf()) / slotPeriod);
      let slots = [];
      let xOffset = this.xOffset;
      let xOffsetEnd = xOffset + this.dataWidth;
      let offset = 0;
      let calendar = [];
      let calendarRef = null;
      let incremtVal = 0;
      // for(let i=0; i<15; i++){
      //   incremtVal = i;
      //     // this.valcount++;
      //    // this.increment()
      //    console.log("halooo count value data",incremtVal)
      // }

    
      for (let i = 0; i < slotsCount; i++) {
      
         
        if (offset + slotWidth > xOffset && offset < xOffsetEnd) {
          slots.push({
            offset: Math.max(offset, xOffset) - 1,
            moment: moment(from),
            zoom: zoomParams[this.zoom],
            incremtVal: i+1
          })

          let current = slotPeriod == week_LONG ? from.month() : from.week();

          if (current != calendarRef) {
            calendarRef = current;

            calendar.push({
              moment: moment(from),
              offset: Math.max(offset, xOffset) - 1,
              width: slotWidth,
            })
          } else {
            calendar[calendar.length - 1].width += slotWidth;
          }
        }
        
        from.add(1, slotPeriod == week_LONG ? "weeks" : "hours");
        offset += slotWidth;
      }

      return {slots, calendar}
    },

    isSlotHeaderInLine () {
      return zoomParams[this.zoom].line
    },

    labelDescription () {
      return zoomParams[this.zoom].label
    },

    calendarFormat () {
      return zoomParams[this.zoom].calendar
    },

    visibleRows () {
      let from = Math.floor(this.yOffset / colHeight)
      let count = Math.ceil(this.dataHeight / colHeight) + 1

      return Object.values(this.rows).slice(from, from + count).map((row, k) => ({
        row,
        y: (from + k) * colHeight,
      }))
    },

    itemGroupedByRowIds () {
      let rows = {}

      // add support for objects
      this.items.forEach(item => {
        // this.increment()

        if (!rows[item.rowId]) {
          rows[item.rowId] = []
        }

        rows[item.rowId].push(item)
      })

      return rows
    },

    pxPerMs () {
      return zoomParams[this.zoom].width / zoomParams[this.zoom].slot
    },

    cellsAndData () {
      let cells = []
      let data = []
      let slotPeriod = zoomParams[this.zoom].slot
      let now = slotPeriod == week_LONG ? moment().startOf("week") : moment().startOf("hour")
      let from = null;

      try {
        from = this.dataSlots.slots[0].moment.valueOf()
      } catch (e) {
        from = moment().valueOf()
      }

      let to = from + (this.dataSlots.slots.length * slotPeriod)
      let refFrom = moment(this.fromTime).startOf("week")
      let dataSlotWidth = this.dataSlotWidth

      this.visibleRows.forEach(row => {
        this.dataSlots.slots.forEach(slot => {
          let background = "#fff"
          let id = `${row.row.id}-${slot.moment.valueOf()}`
          let classes = {}

          if (slot.moment.isSame(now)) {
            background = "#fcf7e4"
          }

          if (this.selectFrom && this.selectTo) {
            let x1 = Math.min(this.selectFrom.x, this.selectTo.x)
            let y1 = Math.min(this.selectFrom.y, this.selectTo.y)
            let x2 = Math.max(this.selectFrom.x, this.selectTo.x)
            let y2 = Math.max(this.selectFrom.y, this.selectTo.y)

            if (slot.offset < x2 && slot.offset + dataSlotWidth > x1 && row.y < y2 && row.y + colHeight > y1) {
              let canSelect = true

              let cellData = {
                rowId: row.row.id,
                from: slot.moment.valueOf(),
                to: slot.moment.valueOf() + slotPeriod - 1,
                x1: slot.offset,
                y1: row.y,
                x2: slot.offset + dataSlotWidth,
                y2: row.y + colHeight,
              }

              if (this.canSelectFunction) {
                canSelect = this.canSelectFunction(cellData)
              }

              if (canSelect) {
                background = "#80d0ff"
                // this.selectedCellsBox[id] = cellData
              }
            }
          }

          if (this.selectedCells[id]) {
            background = "#40b0ff"
          }

          if (this.cells && this.cells[id]) {
            (this.cells[id].classes || []).forEach(name => classes[name] = true)
          }

          cells.push({
            x: slot.offset,
            y: row.y,
            width: dataSlotWidth,
            height: colHeight,
            background,
            row,
            slot,
            classes,
          })
        })

        if (this.itemGroupedByRowIds[row.row.id]) {

          this.itemGroupedByRowIds[row.row.id].forEach(item => {
             console.log('dATa slot id',item.time.start,item.time.end)
            if (item.time.start < to && item.time.end > from) {
              data.push({
                item,
                row,
                y: row.y + 3,
                x: Math.round((item.time.start - refFrom) * this.pxPerMs),
                width: Math.round((item.time.end - item.time.start) * this.pxPerMs),
              

              })
              console.log('graph start and end ',Math.round((item.time.end - item.time.start) * this.pxPerMs))
            }
          })
        }
      })

      return {
        cells,
        data,
      }
    },
  },

  watch: {
    cellsAndData () {
      this.cellsAndDataEditable = Object.assign({}, this.cellsAndData)
    },

    zoom () {
      this.selectedCells = {}
    },

    // from() {
    //   this.fromTime = this.from ? new moment(this.from) : (new moment()).startOf('week').add(-7, 'weeks')
    // },

    // to() {
    //   this.toTime = this.to ? moment(this.to) : moment(this.from).startOf('week').add(3, 'months')
    // },
  },

  mounted () {
    // this.fromTime = this.from ? moment(this.from) : moment().startOf('week').add(-7, 'weeks')
    // this.toTime = this.to ? moment(this.to) : moment().startOf('week').add(3, 'months')
    this.width = this.$refs.gantt.clientWidth
    this.cellsAndDataEditable = Object.assign({}, this.cellsAndData)
    this.scrollX(0)
    this.scrollY(0)
    
  },
}
</script>

<style>


</style>