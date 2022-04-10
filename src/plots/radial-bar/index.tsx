import { App, defineComponent } from 'vue';
import { RadialBar, RadialBarOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type RadialBarChartProps = Writeable<
  Omit<BaseChartProps<RadialBarOptions>, 'chart' | 'data'> & RadialBarOptions
>;

export const RadialBarChart = defineComponent<RadialBarChartProps>({
  name: 'RadialBarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={RadialBar} {...props} {...ctx.attrs} />;
  }
});

RadialBarChart.install = (app: App) => {
  app.component(RadialBarChart.name, RadialBarChart);
};
