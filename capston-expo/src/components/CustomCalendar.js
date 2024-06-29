import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet, Image } from "react-native";
const left = require("../../assets/logo.png"); // 화살표 이미지 경로 확인
const right = require("../../assets/logo.png"); // 화살표 이미지 경로 확인

const CustomCalendar = () => {
  return (
    <Calendar
      theme={{
        todayTextColor: "black",
        textDayFontSize: 20,
        textDayFontWeight: "bold",
        textMonthFontSize: 20,
        textMonthFontWeight: "bold",
        textSectionTitleColor: "rgba(138, 138, 138, 1)",
      }}
      onDayPress={(day) => {
        console.log(day);
      }}
      // 이전 달, 다음 달 날짜 숨기기
      hideExtraDays={true}
      // 달 포맷 지정
      monthFormat={"M월"}
      // 달이 바뀔 때 바뀐 달 출력
      onMonthChange={(month) => {
        console.log(month);
      }}
    />
  );
};
const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
export default CustomCalendar;
