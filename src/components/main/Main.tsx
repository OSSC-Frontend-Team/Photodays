import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const locales: object = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Event {
  title: string;
  start: Date | string | boolean;
  end: Date | string | boolean;
}

const events: Event[] = [
  {
    title: 'Big Meeting',
    start: new Date(2022, 2, 1),
    end: new Date(2022, 2, 3),
  },
  {
    title: 'Vacation',
    start: new Date(2022, 2, 8),
    end: new Date(2022, 2, 10),
  },
  {
    title: 'Conference',
    start: new Date(2022, 2, 17),
    end: new Date(2022, 2, 20),
  },
];

const Main: React.FC = () => {
  const [newEvent, setNewEvent] = useState<Event>({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState<Event[]>(events);

  const handleAddEvent = (): void => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <Container>
      <Title> PhotoDays </Title>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh', margin: '50px' }}
      />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-family: 'Palette Mosaic', cursive;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.main};
  text-align: center;
`;
