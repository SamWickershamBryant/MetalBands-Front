import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/DataGraph.vue';

describe('Splitups', () => {
  it('returns correct splitups count for each year', () => {
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
        data() {
          return {
            yearsArray: () => ['-', '2020'], // Mock yearsArray() function
            data: data,
          };
        },
      });
  
      const splitups = wrapper.vm.splitups();
  
      expect(splitups).toEqual([1, 0]); // Assert the expected output
    });
  });