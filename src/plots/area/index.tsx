import { App, defineComponent } from 'vue';
import { Area, AreaOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type AreaChartProps = Writeable<
  Omit<BaseChartProps<AreaOptions>, 'chart' | 'data'> & AreaOptions
>;

export const AreaChart = defineComponent<AreaChartProps>({
  name: 'AreaChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Area} {...ctx.attrs} {...props} />;
  }
});

AreaChart.install = (app: App) => {
  app.component(AreaChart.name, AreaChart);
};
