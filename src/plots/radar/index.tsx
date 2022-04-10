import { defineComponent, App } from 'vue';
import { Radar, RadarOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type RadarChartProps = Writeable<
  Omit<BaseChartProps<RadarOptions>, 'chart' | 'data'> & RadarOptions
>;

export const RadarChart = defineComponent<RadarChartProps>({
  name: 'RadarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Radar} {...props} {...ctx.attrs} />;
  }
});

RadarChart.install = (app: App) => {
  app.component(RadarChart.name, RadarChart);
};
