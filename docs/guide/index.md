---
title: Guide
---

## 内容

vue3-chart

## 特性

- `G2Plot`
- `vue3-chart`
- `TypeScript`
- **100%** unit test coverage

## 安装

```bash
npm i @garrond/vue3-chart
```

## Usage

### jsx

```tsx
import { defineComponent, ref } from 'vue'
import { LineChart, LineChartProps } from '@garrond/vue3-chart'

const config: LineChartProps = {
  height: 350,
  autoFit: true,
  xField: 'year',
  yField: 'value',
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
  ],
}

export default defineComponent(() => {
  const chartRef = ref(null)
  return <LineChart {...config} chartRef={chartRef} />
})
```

### template

```vue

<template>
  <line-chart v-bind="config" />
</template>
<script>
import Vue from 'vue'
import { LineChart } from '@garrond/vue3-chart'

Vue.use(LineChart)

export default {
  data() {
    return {
      config: {
        height: 350,
        autoFit: true,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
          value: {
            max: 15,
          },
        },
        data: [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 11 },
        ],
      },
    }
  },
}
</script>
```
