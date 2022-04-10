import { defineComponent, App } from 'vue';
import { Column, ColumnOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type ColumnChartProps = Writeable<
  Omit<BaseChartProps<ColumnOptions>, 'chart' | 'data'> & ColumnOptions
>;

export const ColumnChart = defineComponent<ColumnChartProps>({
  name: 'ColumnChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Column} {...props} {...ctx.attrs} />;
  }
});

ColumnChart.install = (app: App) => {
  app.component(ColumnChart.name, ColumnChart);
};
