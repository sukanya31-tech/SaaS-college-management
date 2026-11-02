import ExamCellHero from "@/app/component/examinationcell/ExamCellHero";
import AboutExam from "@/app/component/examinationcell/AboutExam";
import ExaminationStructure from "../component/examinationcell/ExaminationStructure";
import ExaminationNotification from "../component/examinationcell/ExaminationNotification";
import ExaminationEvaluation from "../component/examinationcell/ExaminationEvaluation";
import ExaminationMalpractice from "../component/examinationcell/ExaminationMalpractice";
import ExaminationContact from "../component/examinationcell/ExaminationContact";




export default function Home() {
  return (
    <>
      <ExamCellHero />
      <AboutExam />
      <ExaminationStructure />
      <ExaminationNotification />
      <ExaminationEvaluation />
      <ExaminationMalpractice />
      <ExaminationContact />
      
    </>
  );
}