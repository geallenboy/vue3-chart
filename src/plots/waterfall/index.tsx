import { defineComponent, App } from 'vue';
import { Waterfall, WaterfallOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type WaterfallChartProps = Writeable<
  Omit<BaseChartProps<WaterfallOptions>, 'chart' | 'data'> & WaterfallOptions
>;

export const WaterfallChart = defineComponent<WaterfallChartProps>({
  name: 'WaterfallChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Waterfall} {...props} {...ctx.attrs} />;
  }
});

WaterfallChart.install = (app: App) => {
  app.component(WaterfallChart.name, WaterfallChart);
};
