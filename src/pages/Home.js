import Countdown, { zeroPad } from 'react-countdown';
import PageContent from '../components/PageContent';

const renderer = ({ days, hours, minutes, seconds }) => (
  <h2 style={{textAlign: 'center'}}>
    {zeroPad(days)} days, {zeroPad(hours)} hours, {zeroPad(minutes)} minutes,{' '}
    {zeroPad(seconds)} seconds
  </h2>
);

function HomePage() {
  return (
    <PageContent title="Welcome Class of '73!">
      <h2 style={{textAlign: 'center'}}>Saturday September 16th, 2023  6:00pm PST</h2>
      <Countdown date={Date.UTC(2023, 8, 17, 1)} renderer={renderer} />
    </PageContent>
  );
}

export default HomePage;
