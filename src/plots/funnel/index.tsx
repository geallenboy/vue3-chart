import { defineComponent, App } from 'vue';
import { Funnel, FunnelOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type FunnelChartProps = Writeable<
  Omit<BaseChartProps<FunnelOptions>, 'chart' | 'data'> & FunnelOptions
>;

export const FunnelChart = defineComponent<FunnelChartProps>({
  name: 'FunnelChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Funnel} {...props} {...ctx.attrs} />;
  }
});

FunnelChart.install = (app: App) => {
  app.component(FunnelChart.name, FunnelChart);
};
