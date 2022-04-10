import { App, defineComponent } from 'vue';
import { Box, BoxOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type BoxChartProps = Writeable<
  Omit<BaseChartProps<BoxOptions>, 'chart' | 'data'> & BoxOptions
>;

export const BoxChart = defineComponent<BoxChartProps>({
  name: 'BoxChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Box} {...props} {...ctx.attrs} />;
  }
});

BoxChart.install = (app: App) => {
  app.component(BoxChart.name, BoxChart);
};
