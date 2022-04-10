import { App, defineComponent } from 'vue';
import { Sunburst, SunburstOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type SunburstChartProps = Writeable<
  Omit<BaseChartProps<SunburstOptions>, 'chart' | 'data'> & SunburstOptions
>;

export const SunburstChart = defineComponent<SunburstChartProps>({
  name: 'SunburstChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Sunburst} {...props} {...ctx.attrs} />;
  }
});

SunburstChart.install = (app: App) => {
  app.component(SunburstChart.name, SunburstChart);
};
