import { defineComponent, App } from 'vue';
import { Liquid, LiquidOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type LiquidChartProps = Writeable<
  Omit<BaseChartProps<LiquidOptions>, 'chart' | 'data'> & LiquidOptions
>;

export const LiquidChart = defineComponent<LiquidChartProps>({
  name: 'LiquidChart',
  setup: (props, { attrs }) => {
    return () => <BaseChart chart={Liquid} {...props} {...attrs} />;
  }
});

LiquidChart.install = (app: App) => {
  app.component(LiquidChart.name, LiquidChart);
};
