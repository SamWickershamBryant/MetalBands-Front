import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/DataGraph.vue';

describe('Formations', () => {
  it('returns correct formations count for each year', () => {
    const data = [
      {
        origin: 'USA',
        formed: '1998',
        split: '-',
        band_name: 'Black Label Society',
        id: '228',
        fans: '424',
        style: 'Heavy',
      },
      {
        origin: 'USA',
        formed: '1998',
        split: '-',
        band_name: 'Black Label Society',
        id: '228',
        fans: '424',
        style: 'Heavy',
      }
      // Add more test data as needed
    ];

    const wrapper = shallowMount(MyComponent, {
      propsData: {
        data: data,
      },
      });
  
      const formations = wrapper.vm.formations();
  
      expect(formations[0] == 2); // Assert the expected output
    });
  });