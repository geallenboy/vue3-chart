import { defineComponent, App } from 'vue';
import { Gauge, GaugeOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type GaugeChartProps = Writeable<
  Omit<BaseChartProps<GaugeOptions>, 'chart' | 'data'> & GaugeOptions
>;

export const GaugeChart = defineComponent<GaugeChartProps>({
  name: 'GaugeChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Gauge} {...props} {...ctx.attrs} />;
  }
});

GaugeChart.install = (app: App) => {
  app.component(GaugeChart.name, GaugeChart);
};
