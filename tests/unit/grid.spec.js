// import required modules
import { shallowMount } from '@vue/test-utils';
import Component from '@/App.vue'; // replace with your component's path
import { fetchData } from '@/data.js'; // replace with actual path of fetchData function

jest.mock('@/data.js', () => ({
  fetchData: jest.fn(() => Promise.resolve({
    status: 'ok',
    data: [{origin: 'zUSA',formed: '1998',split: '-',band_name: 'oBlack Label Society',id: '9228',fans: '99424',style: 'oHeavy',},
    {origin: 'yUSA',formed: '1998',split: '-',band_name: 'nBlack Label Society',id: '8228',fans: '98424',style: 'nHeavy',},
    {origin: 'xUSA',formed: '2001',split: '-',band_name: 'mBlack Label Society',id: '7228',fans: '97424',style: 'mHeavy',},
    {origin: 'wUSA',formed: '2001',split: '-',band_name: 'lBlack Label Society',id: '6228',fans: '87424',style: 'lHeavy',},
    {origin: 'kUSA',formed: '2001',split: '-',band_name: 'kBlack Label Society',id: '5228',fans: '8424',style: 'kHeavy',},
    {origin: 'jUSA',formed: '2003',split: '-',band_name: 'jBlack Label Society',id: '4228',fans: '7424',style: 'jHeavy',},
    {origin: 'iUSA',formed: '2004',split: '-',band_name: 'iBlack Label Society',id: '3228',fans: '6424',style: 'iHeavy',},
    {origin: 'hUSA',formed: '2005',split: '-',band_name: 'hBlack Label Society',id: '2228',fans: '5424',style: 'hHeavy',},
    {origin: 'gUSA',formed: '2006',split: '-',band_name: 'gBlack Label Society',id: '1228',fans: '4424',style: 'gHeavy',},
    {origin: 'fUSA',formed: '2007',split: '-',band_name: 'fBlack Label Society',id: '228',fans: '3424',style: 'fHeavy',},
    {origin: 'eUSA',formed: '2008',split: '-',band_name: 'eBlack Label Society',id: '227',fans: '2424',style: 'eHeavy',},
    {origin: 'dUSA',formed: '2008',split: '-',band_name: 'dBlack Label Society',id: '226',fans: '1424',style: 'dHeavy',},
    {origin: 'cUSA',formed: '2008',split: '-',band_name: 'cBlack Label Society',id: '225',fans: '424',style: 'cHeavy',},
    {origin: 'bUSA',formed: '2011',split: '-',band_name: 'bBlack Label Society',id: '224',fans: '324',style: 'bHeavy',},
    {origin: 'aUSA',formed: '2012',split: '-',band_name: 'aBlack Label Society',id: '223',fans: '224',style: 'aHeavy',},]
  }))
}));

describe('YourComponent', () => {
  it('Recieves data and correctly paginates it, csv is correctly made', async () => {
    const wrapper = shallowMount(Component);

    // Since fetchData is asynchronous, we need to wait until it's done
    await wrapper.vm.$nextTick();

    expect(fetchData).toHaveBeenCalled();
    expect(wrapper.vm.items).toEqual([{origin: 'zUSA',formed: '1998',split: '-',band_name: 'oBlack Label Society',id: '9228',fans: '99424',style: 'oHeavy',},
    {origin: 'yUSA',formed: '1998',split: '-',band_name: 'nBlack Label Society',id: '8228',fans: '98424',style: 'nHeavy',},
    {origin: 'xUSA',formed: '2001',split: '-',band_name: 'mBlack Label Society',id: '7228',fans: '97424',style: 'mHeavy',},
    {origin: 'wUSA',formed: '2001',split: '-',band_name: 'lBlack Label Society',id: '6228',fans: '87424',style: 'lHeavy',},
    {origin: 'kUSA',formed: '2001',split: '-',band_name: 'kBlack Label Society',id: '5228',fans: '8424',style: 'kHeavy',},
    {origin: 'jUSA',formed: '2003',split: '-',band_name: 'jBlack Label Society',id: '4228',fans: '7424',style: 'jHeavy',},
    {origin: 'iUSA',formed: '2004',split: '-',band_name: 'iBlack Label Society',id: '3228',fans: '6424',style: 'iHeavy',},
    {origin: 'hUSA',formed: '2005',split: '-',band_name: 'hBlack Label Society',id: '2228',fans: '5424',style: 'hHeavy',},
    {origin: 'gUSA',formed: '2006',split: '-',band_name: 'gBlack Label Society',id: '1228',fans: '4424',style: 'gHeavy',},
    {origin: 'fUSA',formed: '2007',split: '-',band_name: 'fBlack Label Society',id: '228',fans: '3424',style: 'fHeavy',},
    {origin: 'eUSA',formed: '2008',split: '-',band_name: 'eBlack Label Society',id: '227',fans: '2424',style: 'eHeavy',},
    {origin: 'dUSA',formed: '2008',split: '-',band_name: 'dBlack Label Society',id: '226',fans: '1424',style: 'dHeavy',},
    {origin: 'cUSA',formed: '2008',split: '-',band_name: 'cBlack Label Society',id: '225',fans: '424',style: 'cHeavy',},
    {origin: 'bUSA',formed: '2011',split: '-',band_name: 'bBlack Label Society',id: '224',fans: '324',style: 'bHeavy',},
    {origin: 'aUSA',formed: '2012',split: '-',band_name: 'aBlack Label Society',id: '223',fans: '224',style: 'aHeavy',},])
    expect(wrapper.vm.pagedData.length == 15 / wrapper.vm.pageCount)

    expect(wrapper.vm.createParse()).toBeDefined()

    
  });
  it('Correctly sorts the table based on column', async () => {
    const wrapper = shallowMount(Component);

    // Since fetchData is asynchronous, we need to wait until it's done
    await wrapper.vm.$nextTick();

    wrapper.vm.sortTable('origin')
    wrapper.vm.sortTable('origin')
    expect(wrapper.vm.items).toEqual([
        {
          origin: 'aUSA',
          formed: '2012',
          split: '-',
          band_name: 'aBlack Label Society',
          id: '223',
          fans: '224',
          style: 'aHeavy'
        },
        {
          origin: 'bUSA',
          formed: '2011',
          split: '-',
          band_name: 'bBlack Label Society',
          id: '224',
          fans: '324',
          style: 'bHeavy'
        },
        {
          origin: 'cUSA',
          formed: '2008',
          split: '-',
          band_name: 'cBlack Label Society',
          id: '225',
          fans: '424',
          style: 'cHeavy'
        },
        {
          origin: 'dUSA',
          formed: '2008',
          split: '-',
          band_name: 'dBlack Label Society',
          id: '226',
          fans: '1424',
          style: 'dHeavy'
        },
        {
          origin: 'eUSA',
          formed: '2008',
          split: '-',
          band_name: 'eBlack Label Society',
          id: '227',
          fans: '2424',
          style: 'eHeavy'
        },
        {
          origin: 'fUSA',
          formed: '2007',
          split: '-',
          band_name: 'fBlack Label Society',
          id: '228',
          fans: '3424',
          style: 'fHeavy'
        },
        {
          origin: 'gUSA',
          formed: '2006',
          split: '-',
          band_name: 'gBlack Label Society',
          id: '1228',
          fans: '4424',
          style: 'gHeavy'
        },
        {
          origin: 'hUSA',
          formed: '2005',
          split: '-',
          band_name: 'hBlack Label Society',
          id: '2228',
          fans: '5424',
          style: 'hHeavy'
        },
        {
          origin: 'iUSA',
          formed: '2004',
          split: '-',
          band_name: 'iBlack Label Society',
          id: '3228',
          fans: '6424',
          style: 'iHeavy'
        },
        {
          origin: 'jUSA',
          formed: '2003',
          split: '-',
          band_name: 'jBlack Label Society',
          id: '4228',
          fans: '7424',
          style: 'jHeavy'
        },
        {
          origin: 'kUSA',
          formed: '2001',
          split: '-',
          band_name: 'kBlack Label Society',
          id: '5228',
          fans: '8424',
          style: 'kHeavy'
        },
        {
          origin: 'wUSA',
          formed: '2001',
          split: '-',
          band_name: 'lBlack Label Society',
          id: '6228',
          fans: '87424',
          style: 'lHeavy'
        },
        {
          origin: 'xUSA',
          formed: '2001',
          split: '-',
          band_name: 'mBlack Label Society',
          id: '7228',
          fans: '97424',
          style: 'mHeavy'
        },
        {
          origin: 'yUSA',
          formed: '1998',
          split: '-',
          band_name: 'nBlack Label Society',
          id: '8228',
          fans: '98424',
          style: 'nHeavy'
        },
        {
          origin: 'zUSA',
          formed: '1998',
          split: '-',
          band_name: 'oBlack Label Society',
          id: '9228',
          fans: '99424',
          style: 'oHeavy'
        }
      ])
      wrapper.vm.sortTable('formed')
      expect(wrapper.vm.items).toEqual([
        {
          origin: 'yUSA',
          formed: '1998',
          split: '-',
          band_name: 'nBlack Label Society',
          id: '8228',
          fans: '98424',
          style: 'nHeavy'
        },
        {
          origin: 'zUSA',
          formed: '1998',
          split: '-',
          band_name: 'oBlack Label Society',
          id: '9228',
          fans: '99424',
          style: 'oHeavy'
        },
        {
          origin: 'kUSA',
          formed: '2001',
          split: '-',
          band_name: 'kBlack Label Society',
          id: '5228',
          fans: '8424',
          style: 'kHeavy'
        },
        {
          origin: 'wUSA',
          formed: '2001',
          split: '-',
          band_name: 'lBlack Label Society',
          id: '6228',
          fans: '87424',
          style: 'lHeavy'
        },
        {
          origin: 'xUSA',
          formed: '2001',
          split: '-',
          band_name: 'mBlack Label Society',
          id: '7228',
          fans: '97424',
          style: 'mHeavy'
        },
        {
          origin: 'jUSA',
          formed: '2003',
          split: '-',
          band_name: 'jBlack Label Society',
          id: '4228',
          fans: '7424',
          style: 'jHeavy'
        },
        {
          origin: 'iUSA',
          formed: '2004',
          split: '-',
          band_name: 'iBlack Label Society',
          id: '3228',
          fans: '6424',
          style: 'iHeavy'
        },
        {
          origin: 'hUSA',
          formed: '2005',
          split: '-',
          band_name: 'hBlack Label Society',
          id: '2228',
          fans: '5424',
          style: 'hHeavy'
        },
        {
          origin: 'gUSA',
          formed: '2006',
          split: '-',
          band_name: 'gBlack Label Society',
          id: '1228',
          fans: '4424',
          style: 'gHeavy'
        },
        {
          origin: 'fUSA',
          formed: '2007',
          split: '-',
          band_name: 'fBlack Label Society',
          id: '228',
          fans: '3424',
          style: 'fHeavy'
        },
        {
          origin: 'cUSA',
          formed: '2008',
          split: '-',
          band_name: 'cBlack Label Society',
          id: '225',
          fans: '424',
          style: 'cHeavy'
        },
        {
          origin: 'dUSA',
          formed: '2008',
          split: '-',
          band_name: 'dBlack Label Society',
          id: '226',
          fans: '1424',
          style: 'dHeavy'
        },
        {
          origin: 'eUSA',
          formed: '2008',
          split: '-',
          band_name: 'eBlack Label Society',
          id: '227',
          fans: '2424',
          style: 'eHeavy'
        },
        {
          origin: 'bUSA',
          formed: '2011',
          split: '-',
          band_name: 'bBlack Label Society',
          id: '224',
          fans: '324',
          style: 'bHeavy'
        },
        {
          origin: 'aUSA',
          formed: '2012',
          split: '-',
          band_name: 'aBlack Label Society',
          id: '223',
          fans: '224',
          style: 'aHeavy'
        }
      ])

      wrapper.vm.sortTable('band_name')
      expect(wrapper.vm.items).toEqual([
        {
          origin: 'aUSA',
          formed: '2012',
          split: '-',
          band_name: 'aBlack Label Society',
          id: '223',
          fans: '224',
          style: 'aHeavy'
        },
        {
          origin: 'bUSA',
          formed: '2011',
          split: '-',
          band_name: 'bBlack Label Society',
          id: '224',
          fans: '324',
          style: 'bHeavy'
        },
        {
          origin: 'cUSA',
          formed: '2008',
          split: '-',
          band_name: 'cBlack Label Society',
          id: '225',
          fans: '424',
          style: 'cHeavy'
        },
        {
          origin: 'dUSA',
          formed: '2008',
          split: '-',
          band_name: 'dBlack Label Society',
          id: '226',
          fans: '1424',
          style: 'dHeavy'
        },
        {
          origin: 'eUSA',
          formed: '2008',
          split: '-',
          band_name: 'eBlack Label Society',
          id: '227',
          fans: '2424',
          style: 'eHeavy'
        },
        {
          origin: 'fUSA',
          formed: '2007',
          split: '-',
          band_name: 'fBlack Label Society',
          id: '228',
          fans: '3424',
          style: 'fHeavy'
        },
        {
          origin: 'gUSA',
          formed: '2006',
          split: '-',
          band_name: 'gBlack Label Society',
          id: '1228',
          fans: '4424',
          style: 'gHeavy'
        },
        {
          origin: 'hUSA',
          formed: '2005',
          split: '-',
          band_name: 'hBlack Label Society',
          id: '2228',
          fans: '5424',
          style: 'hHeavy'
        },
        {
          origin: 'iUSA',
          formed: '2004',
          split: '-',
          band_name: 'iBlack Label Society',
          id: '3228',
          fans: '6424',
          style: 'iHeavy'
        },
        {
          origin: 'jUSA',
          formed: '2003',
          split: '-',
          band_name: 'jBlack Label Society',
          id: '4228',
          fans: '7424',
          style: 'jHeavy'
        },
        {
          origin: 'kUSA',
          formed: '2001',
          split: '-',
          band_name: 'kBlack Label Society',
          id: '5228',
          fans: '8424',
          style: 'kHeavy'
        },
        {
          origin: 'wUSA',
          formed: '2001',
          split: '-',
          band_name: 'lBlack Label Society',
          id: '6228',
          fans: '87424',
          style: 'lHeavy'
        },
        {
          origin: 'xUSA',
          formed: '2001',
          split: '-',
          band_name: 'mBlack Label Society',
          id: '7228',
          fans: '97424',
          style: 'mHeavy'
        },
        {
          origin: 'yUSA',
          formed: '1998',
          split: '-',
          band_name: 'nBlack Label Society',
          id: '8228',
          fans: '98424',
          style: 'nHeavy'
        },
        {
          origin: 'zUSA',
          formed: '1998',
          split: '-',
          band_name: 'oBlack Label Society',
          id: '9228',
          fans: '99424',
          style: 'oHeavy'
        }
      ])

      wrapper.vm.sortTable('id')
      expect(wrapper.vm.items).toEqual([
        {
          origin: 'aUSA',
          formed: '2012',
          split: '-',
          band_name: 'aBlack Label Society',
          id: '223',
          fans: '224',
          style: 'aHeavy'
        },
        {
          origin: 'bUSA',
          formed: '2011',
          split: '-',
          band_name: 'bBlack Label Society',
          id: '224',
          fans: '324',
          style: 'bHeavy'
        },
        {
          origin: 'cUSA',
          formed: '2008',
          split: '-',
          band_name: 'cBlack Label Society',
          id: '225',
          fans: '424',
          style: 'cHeavy'
        },
        {
          origin: 'dUSA',
          formed: '2008',
          split: '-',
          band_name: 'dBlack Label Society',
          id: '226',
          fans: '1424',
          style: 'dHeavy'
        },
        {
          origin: 'eUSA',
          formed: '2008',
          split: '-',
          band_name: 'eBlack Label Society',
          id: '227',
          fans: '2424',
          style: 'eHeavy'
        },
        {
          origin: 'fUSA',
          formed: '2007',
          split: '-',
          band_name: 'fBlack Label Society',
          id: '228',
          fans: '3424',
          style: 'fHeavy'
        },
        {
          origin: 'gUSA',
          formed: '2006',
          split: '-',
          band_name: 'gBlack Label Society',
          id: '1228',
          fans: '4424',
          style: 'gHeavy'
        },
        {
          origin: 'hUSA',
          formed: '2005',
          split: '-',
          band_name: 'hBlack Label Society',
          id: '2228',
          fans: '5424',
          style: 'hHeavy'
        },
        {
          origin: 'iUSA',
          formed: '2004',
          split: '-',
          band_name: 'iBlack Label Society',
          id: '3228',
          fans: '6424',
          style: 'iHeavy'
        },
        {
          origin: 'jUSA',
          formed: '2003',
          split: '-',
          band_name: 'jBlack Label Society',
          id: '4228',
          fans: '7424',
          style: 'jHeavy'
        },
        {
          origin: 'kUSA',
          formed: '2001',
          split: '-',
          band_name: 'kBlack Label Society',
          id: '5228',
          fans: '8424',
          style: 'kHeavy'
        },
        {
          origin: 'wUSA',
          formed: '2001',
          split: '-',
          band_name: 'lBlack Label Society',
          id: '6228',
          fans: '87424',
          style: 'lHeavy'
        },
        {
          origin: 'xUSA',
          formed: '2001',
          split: '-',
          band_name: 'mBlack Label Society',
          id: '7228',
          fans: '97424',
          style: 'mHeavy'
        },
        {
          origin: 'yUSA',
          formed: '1998',
          split: '-',
          band_name: 'nBlack Label Society',
          id: '8228',
          fans: '98424',
          style: 'nHeavy'
        },
        {
          origin: 'zUSA',
          formed: '1998',
          split: '-',
          band_name: 'oBlack Label Society',
          id: '9228',
          fans: '99424',
          style: 'oHeavy'
        }
      ])

      wrapper.vm.sortTable('fans')
      wrapper.vm.sortTable('fans')
      expect(wrapper.vm.items).toEqual([
        {
          origin: 'zUSA',
          formed: '1998',
          split: '-',
          band_name: 'oBlack Label Society',
          id: '9228',
          fans: '99424',
          style: 'oHeavy'
        },
        {
          origin: 'yUSA',
          formed: '1998',
          split: '-',
          band_name: 'nBlack Label Society',
          id: '8228',
          fans: '98424',
          style: 'nHeavy'
        },
        {
          origin: 'xUSA',
          formed: '2001',
          split: '-',
          band_name: 'mBlack Label Society',
          id: '7228',
          fans: '97424',
          style: 'mHeavy'
        },
        {
          origin: 'wUSA',
          formed: '2001',
          split: '-',
          band_name: 'lBlack Label Society',
          id: '6228',
          fans: '87424',
          style: 'lHeavy'
        },
        {
          origin: 'kUSA',
          formed: '2001',
          split: '-',
          band_name: 'kBlack Label Society',
          id: '5228',
          fans: '8424',
          style: 'kHeavy'
        },
        {
          origin: 'jUSA',
          formed: '2003',
          split: '-',
          band_name: 'jBlack Label Society',
          id: '4228',
          fans: '7424',
          style: 'jHeavy'
        },
        {
          origin: 'iUSA',
          formed: '2004',
          split: '-',
          band_name: 'iBlack Label Society',
          id: '3228',
          fans: '6424',
          style: 'iHeavy'
        },
        {
          origin: 'hUSA',
          formed: '2005',
          split: '-',
          band_name: 'hBlack Label Society',
          id: '2228',
          fans: '5424',
          style: 'hHeavy'
        },
        {
          origin: 'gUSA',
          formed: '2006',
          split: '-',
          band_name: 'gBlack Label Society',
          id: '1228',
          fans: '4424',
          style: 'gHeavy'
        },
        {
          origin: 'fUSA',
          formed: '2007',
          split: '-',
          band_name: 'fBlack Label Society',
          id: '228',
          fans: '3424',
          style: 'fHeavy'
        },
        {
          origin: 'eUSA',
          formed: '2008',
          split: '-',
          band_name: 'eBlack Label Society',
          id: '227',
          fans: '2424',
          style: 'eHeavy'
        },
        {
          origin: 'dUSA',
          formed: '2008',
          split: '-',
          band_name: 'dBlack Label Society',
          id: '226',
          fans: '1424',
          style: 'dHeavy'
        },
        {
          origin: 'cUSA',
          formed: '2008',
          split: '-',
          band_name: 'cBlack Label Society',
          id: '225',
          fans: '424',
          style: 'cHeavy'
        },
        {
          origin: 'bUSA',
          formed: '2011',
          split: '-',
          band_name: 'bBlack Label Society',
          id: '224',
          fans: '324',
          style: 'bHeavy'
        },
        {
          origin: 'aUSA',
          formed: '2012',
          split: '-',
          band_name: 'aBlack Label Society',
          id: '223',
          fans: '224',
          style: 'aHeavy'
        }
      ])
      wrapper.vm.sortTable('style')
      wrapper.vm.sortTable('style')
      expect(wrapper.vm.items).toEqual([
        {
          origin: 'zUSA',
          formed: '1998',
          split: '-',
          band_name: 'oBlack Label Society',
          id: '9228',
          fans: '99424',
          style: 'oHeavy'
        },
        {
          origin: 'yUSA',
          formed: '1998',
          split: '-',
          band_name: 'nBlack Label Society',
          id: '8228',
          fans: '98424',
          style: 'nHeavy'
        },
        {
          origin: 'xUSA',
          formed: '2001',
          split: '-',
          band_name: 'mBlack Label Society',
          id: '7228',
          fans: '97424',
          style: 'mHeavy'
        },
        {
          origin: 'wUSA',
          formed: '2001',
          split: '-',
          band_name: 'lBlack Label Society',
          id: '6228',
          fans: '87424',
          style: 'lHeavy'
        },
        {
          origin: 'kUSA',
          formed: '2001',
          split: '-',
          band_name: 'kBlack Label Society',
          id: '5228',
          fans: '8424',
          style: 'kHeavy'
        },
        {
          origin: 'jUSA',
          formed: '2003',
          split: '-',
          band_name: 'jBlack Label Society',
          id: '4228',
          fans: '7424',
          style: 'jHeavy'
        },
        {
          origin: 'iUSA',
          formed: '2004',
          split: '-',
          band_name: 'iBlack Label Society',
          id: '3228',
          fans: '6424',
          style: 'iHeavy'
        },
        {
          origin: 'hUSA',
          formed: '2005',
          split: '-',
          band_name: 'hBlack Label Society',
          id: '2228',
          fans: '5424',
          style: 'hHeavy'
        },
        {
          origin: 'gUSA',
          formed: '2006',
          split: '-',
          band_name: 'gBlack Label Society',
          id: '1228',
          fans: '4424',
          style: 'gHeavy'
        },
        {
          origin: 'fUSA',
          formed: '2007',
          split: '-',
          band_name: 'fBlack Label Society',
          id: '228',
          fans: '3424',
          style: 'fHeavy'
        },
        {
          origin: 'eUSA',
          formed: '2008',
          split: '-',
          band_name: 'eBlack Label Society',
          id: '227',
          fans: '2424',
          style: 'eHeavy'
        },
        {
          origin: 'dUSA',
          formed: '2008',
          split: '-',
          band_name: 'dBlack Label Society',
          id: '226',
          fans: '1424',
          style: 'dHeavy'
        },
        {
          origin: 'cUSA',
          formed: '2008',
          split: '-',
          band_name: 'cBlack Label Society',
          id: '225',
          fans: '424',
          style: 'cHeavy'
        },
        {
          origin: 'bUSA',
          formed: '2011',
          split: '-',
          band_name: 'bBlack Label Society',
          id: '224',
          fans: '324',
          style: 'bHeavy'
        },
        {
          origin: 'aUSA',
          formed: '2012',
          split: '-',
          band_name: 'aBlack Label Society',
          id: '223',
          fans: '224',
          style: 'aHeavy'
        }
      ])
    
  });
  
});
