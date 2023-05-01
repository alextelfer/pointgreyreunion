import PageContent from '../components/PageContent';

function EventInfo() {
  return (
    <PageContent title="Event Information">
      <h2>Where will this event be held?</h2>
      <p>
        {' '}
        This event will now be held at the Seymour Golf & Country Club at 3723
        Mount Seymour Parkway, North Vancouver B.C. - Free Parking on Site
      </p>
      <h2>When will this event be held?</h2>
      <p>
        This event will be held on Saturday September 16th, 2023 at 7:00pm PST
        to 11:30pm PST.
      </p>
      <h2>What is the cost of this event?</h2>
      <p>
        The early bird pricing has ended. Tickets of this event are $73.00 per
        person. Payment can be made by E-Transfer to Bill Coller at {' '}
        <a href="mailto:bcoller55@gmail.com">bcoller55@gmail.com</a>. Please
        include names of the attendees. Those that wish to pay by cheque should
        email Bill to arrange payment. The cost of the tickets will include
        admission and appetizers. Payment is required before Friday, August 18th
        so that we can ensure there are enough appetizers for the reunion
        guests, however earlier purchase of tickets would help us confirm our
        costs. For any further questions on this event, please contact Michael
        Richardson at{' '} 
        <a href="mailto:mcrichardson@telus.net">mcrichardson@telus.net</a> or
        (604) 329-3692. <b>**Please Note**</b> The full service bar will <b>only</b> accept
        Visa, Mastercard, American Express or Debit.
      </p>
      <h2>How do I RSVP?</h2>
      <p>When payment is received you will receive email confirmation.</p>
    </PageContent>
  );
}

export default EventInfo;
