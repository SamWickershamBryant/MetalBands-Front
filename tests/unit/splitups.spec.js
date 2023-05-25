import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/DataGraph.vue';

describe('Splitups', () => {
  it('returns correct splitups count for each year', () => {
    const data = [
      {origin: 'USA',formed: '1998',split: '1998',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '1999',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2000',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2001',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2002',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2003',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2004',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2005',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2006',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2007',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2008',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2009',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2010',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2011',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
      {origin: 'USA',formed: '1998',split: '2012',band_name: 'Black Label Society',id: '228',fans: '424',style: 'Heavy',},
    ];

    const wrapper = shallowMount(MyComponent, {
      propsData: {
        data: data,
      },
      });
  
      const splitups = wrapper.vm.splitups();
  
      //expect(splitups == [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0])
      expect(splitups).toEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]) // Assert the expected output
    });
  });