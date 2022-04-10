import { mount } from '@vue/test-utils';
import { AreaChart } from '../../src/plots/area';

const config = {
  data: [],
  xField: 'a',
  yField: 'b'
};

describe('AreaChart', () => {
  test('should render without crashed', () => {
    mount(() => <AreaChart {...config} />);
  });
});
