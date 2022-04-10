import { App, defineComponent } from 'vue';
import { BidirectionalBar, BidirectionalBarOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type BidirectionalBarChartProps = Writeable<
  Omit<BaseChartProps<BidirectionalBarOptions>, 'chart' | 'data'> & BidirectionalBarOptions
>;

export const BidirectionalBarChart = defineComponent<BidirectionalBarChartProps>({
  name: 'BidirectionalBarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={BidirectionalBar} {...props} {...ctx.attrs} />;
  }
});

BidirectionalBarChart.install = (app: App) => {
  app.component(BidirectionalBarChart.name, BidirectionalBarChart);
};
