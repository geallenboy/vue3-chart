import { App, defineComponent } from 'vue';
import { Bar, BarOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type BarChartProps = Writeable<
  Omit<BaseChartProps<BarOptions>, 'chart' | 'data'> & BarOptions
>;

export const BarChart = defineComponent<BarChartProps>({
  name: 'BarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bar} {...ctx.attrs} {...props} />;
  }
});

BarChart.install = (app: App) => {
  app.component(BarChart.name, BarChart);
};
