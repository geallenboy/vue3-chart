import { App, defineComponent } from 'vue';
import { Bullet, BulletOptions } from '@antv/g2plot';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type BulletChartProps = Writeable<
  Omit<BaseChartProps<BulletOptions>, 'chart' | 'data'> & BulletOptions
>;

export const BulletChart = defineComponent<BulletChartProps>({
  name: 'BulletChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bullet} {...props} {...ctx.attrs} />;
  }
});

BulletChart.install = (app: App) => {
  app.component(BulletChart.name, BulletChart);
};
