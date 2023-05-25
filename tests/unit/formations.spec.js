import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/DataGraph.vue';

describe('Formations', () => {
  it('returns correct formations count for each year', () => {
    const data = [
      {origin: 'USA',formed: '1998',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2001',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2001',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2001',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2003',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2004',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2005',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2006',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2007',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2008',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2008',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2008',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2011',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '2012',split: '-',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},

      // Add more test data as needed
    ];

    const wrapper = shallowMount(MyComponent, {
      propsData: {
        data: data,
      },
      });
  
      const formations = wrapper.vm.formations();
  
      expect(formations).toEqual([2,0,0,3,0,1,1,1,1,1,3,0,0,1,1,0,0,0,0,0,0,0,0]); // Assert the expected output
    });
  });