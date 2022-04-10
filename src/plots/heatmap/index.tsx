import { defineComponent, App } from 'vue';
import { Heatmap, HeatmapOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type HeatmapChartProps = Writeable<
  Omit<BaseChartProps<HeatmapOptions>, 'chart' | 'data'> & HeatmapOptions
>;

export const HeatmapChart = defineComponent<HeatmapChartProps>({
  name: 'HeatmapChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Heatmap} {...props} {...ctx.attrs} />;
  }
});

HeatmapChart.install = (app: App) => {
  app.component(HeatmapChart.name, HeatmapChart);
};
