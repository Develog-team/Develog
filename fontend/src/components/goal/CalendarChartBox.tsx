import { useLayoutEffect, useState } from 'react';
import { CalendarTooltipProps, ResponsiveCalendar } from '@nivo/calendar';
import { Select, Space } from 'antd';
import { ContainerBox } from 'components/common';
import styled from 'styled-components';

type CalendarDataProps = {
  date: string;
  goals: string[];
};

const Header = ({
  chartsYear,
  selectYear,
}: {
  chartsYear: string;
  selectYear: (value: string) => void;
}) => {
  return (
    <Space>
      <h2>목표 캘린더 차트</h2>
      <Select
        defaultValue={chartsYear}
        style={{ width: 120 }}
        onChange={selectYear}
        options={[
          { value: '2023', label: '2023' },
          { value: '2022', label: '2022' },
        ]}
      />
    </Space>
  );
};

const TooltipBox = ({
  data,
  tooltipX,
  item,
}: {
  data: CalendarDataProps[];
  tooltipX: number;
  item: CalendarTooltipProps;
}) => {
  const targetItem = data.find((list) => list.date === item.day);
  const splittedDate = item.day.split('-');
  const month = splittedDate[1].replace(/^[0]/, '');
  const day = splittedDate[2].replace(/^[0]/, '');

  const [tooltipDirection, setTooltipDirection] = useState('right');
  const directionStandard = 700;

  useLayoutEffect(() => {
    if (tooltipX > directionStandard) {
      setTooltipDirection('left');
    } else {
      setTooltipDirection('right');
    }
  }, [tooltipX]);
  return (
    <StyledTooltip $tooltipdirection={tooltipDirection}>
      <div>{`${month}월 ${day}일`}</div>
      <div>
        총{' '}
        <span
          style={{ color: `${item.color}`, fontWeight: 'bold', fontSize: 20 }}
        >
          {item.value}
        </span>
        개를 실천하였습니다.
      </div>
      <ul>{targetItem?.goals.map((list) => <li key={list}>{list}</li>)}</ul>
    </StyledTooltip>
  );
};

export const CalendarChartBox = ({ data }: { data: CalendarDataProps[] }) => {
  // 차트 년도 state
  const [chartsYear, setChartsYear] = useState('2023');
  const [tooltipX, setTooltipX] = useState<number>(0);

  //차트에 들어갈 데이터
  const Calendardata: { day: string; value: number }[] = [];
  for (let i = 0; i < data.length; i++) {
    const newData = {
      day: data[i].date,
      value: data[i].goals.length,
    };
    Calendardata.push(newData);
  }

  const selectYear = (value: string) => {
    setChartsYear(value);
  };
  return (
    <>
      <Header chartsYear={chartsYear} selectYear={selectYear} />
      <ContainerBox $outline='shadow'>
        <div style={{ height: 200 }}>
          <ResponsiveCalendar
            data={Calendardata}
            from={`${chartsYear}-01-01`}
            to={`${chartsYear}-12-31`}
            emptyColor='#eeeeee'
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            yearSpacing={40}
            monthBorderColor='#ffffff'
            dayBorderWidth={2}
            onMouseMove={(cell) => setTooltipX(cell.x)}
            dayBorderColor='#ffffff'
            tooltip={(point) => (
              <TooltipBox data={data} tooltipX={tooltipX} item={point} />
            )}
          />
        </div>
      </ContainerBox>
    </>
  );
};

const StyledTooltip = styled.div<{
  $tooltipdirection: string;
}>`
  width: 200px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
  position: absolute;
  top: 15px;
  ${({ $tooltipdirection }) =>
    $tooltipdirection === 'right' ? `left: 10px ` : `right : 15px`};
  & ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
