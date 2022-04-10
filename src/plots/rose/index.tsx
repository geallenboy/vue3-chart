import { defineComponent, App } from 'vue';
import { Rose, RoseOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type RoseChartProps = Writeable<
  Omit<BaseChartProps<RoseOptions>, 'chart' | 'data'> & RoseOptions
>;

export const RoseChart = defineComponent<RoseChartProps>({
  name: 'RoseChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Rose} {...props} {...ctx.attrs} />;
  }
});

RoseChart.install = (app: App) => {
  app.component(RoseChart.name, RoseChart);
};
