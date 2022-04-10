import { App, defineComponent } from 'vue';
import { Treemap, TreemapOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type TreemapChartProps = Writeable<
  Omit<BaseChartProps<TreemapOptions>, 'chart' | 'data'> & TreemapOptions
>;

export const TreemapChart = defineComponent<TreemapChartProps>({
  name: 'TreemapChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Treemap} {...props} {...ctx.attrs} />;
  }
});

TreemapChart.install = (app: App) => {
  app.component(TreemapChart.name, TreemapChart);
};
