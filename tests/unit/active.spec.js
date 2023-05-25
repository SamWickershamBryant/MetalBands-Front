import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/DataGraph.vue';

describe('Active', () => {
  it('returns correct active bands count for each year', () => {
    const data = [
      {
        origin: 'USA',
        formed: '1998',
        split: '2000',
        band_name: 'Black Label Society',
        id: '228',
        fans: '424',
        style: 'Heavy',
      },
      {
        origin: 'USA',
        formed: '1998',
        split: '2000',
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
            yearsArray: () => ['1998'], // Mock yearsArray() function
            data: data,
          };
        },
      });
  
      const activelikefrfr = wrapper.vm.activelikefrfr();
  
      expect(activelikefrfr).toEqual([1]); // Assert the expected output
    });
  });