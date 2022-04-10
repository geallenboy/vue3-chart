import { App, defineComponent } from 'vue';
import { Stock, StockOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type StockChartProps = Writeable<
  Omit<BaseChartProps<StockOptions>, 'chart' | 'data'> & StockOptions
>;

export const StockChart = defineComponent<StockChartProps>({
  name: 'StockChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Stock} {...props} {...ctx.attrs} />;
  }
});

StockChart.install = (app: App) => {
  app.component(StockChart.name, StockChart);
};
