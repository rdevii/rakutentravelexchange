import { shallowMount } from '@vue/test-utils';
import HotelCard from '@/components/HotelCard.vue';

describe('HotelCard.vue', () => {
  it('renders properties when passed', () => {
    const name = 'Quest East Perth';
    const country = 'AU';
    const imageURL = 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg';
    const score = '100';

    const testComponent = shallowMount(HotelCard, {
      props: { name, country, imageURL, score },
    });

    // check if each component exists (can also be done per 'it')
    // TODO: need to check how to get component values from el-card

    // should be something like: expect(testComponent.name.text()).toMatch(name);
    // expect(testComponent.text()).toMatch(msg);
  });
});
