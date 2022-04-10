import { defineComponent, App } from 'vue';
import { Line, LineOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type LineChartProps = Writeable<
  Omit<BaseChartProps<LineOptions>, 'chart' | 'data'> & LineOptions
>;

export const LineChart = defineComponent<LineChartProps>({
  name: 'LineChart',
  setup: (props, ctx) => {
    console.log(props, ctx.attrs, 999);
    return () => <BaseChart chart={Line} {...ctx.attrs} {...props} />;
  }
});

LineChart.install = (app: App) => {
  app.component(LineChart.name, LineChart);
};
