import { App, defineComponent } from 'vue';
import { DualAxes, DualAxesOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type DualAxesChartProps = Writeable<
  Omit<BaseChartProps<DualAxesOptions>, 'chart' | 'data'> & DualAxesOptions
>;

export const DualAxesChart = defineComponent<DualAxesChartProps>({
  name: 'DualAxesChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={DualAxes} {...props} {...ctx.attrs} />;
  }
});

DualAxesChart.install = (app: App) => {
  app.component(DualAxesChart.name, DualAxesChart);
};
