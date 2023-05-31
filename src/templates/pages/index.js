import { h } from 'preact';
import DefaultLayout from '@layouts/default';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class="wrap">
        {/* <div class="nav" /> */}
        <div id="app" />
    </div>
</DefaultLayout>;

export default HomePage;