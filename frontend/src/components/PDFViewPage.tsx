import React from "react";
import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

interface CoverLetterProps {
  companyName: string;
  coverLetterBody: string;
}
export default function PDFViewPage({
  coverLetterBody,
  companyName,
}: CoverLetterProps) {
  // const [coverLetterBody, setCoverLetterBody] = useState(
  //   "My passion for pushing the boundaries of AI and NLP aligns perfectly with Cohere's mission to empower developers with cutting-edge language models.  I'm particularly drawn to your focus on building innovative and user-centric products, a philosophy I've consistently embraced throughout my career.\n\nDuring my internship at Delet, I transformed a company website into a high-performing React Native app, ensuring seamless functionality across platforms.  This experience honed my ability to design intuitive user interfaces, optimize API integrations, and collaborate effectively with cross-functional teams. The result was a 20% increase in user engagement and retention, demonstrating my commitment to delivering impactful results.\n\nMy experience extends beyond app development.  I spearheaded the design and development of a user-friendly charity website, integrating a secure payment gateway with React.  This project, which resulted in a 9% increase in online donations, allowed me to refine my skills in optimizing user flow and ensuring transaction security, critical considerations for any technology-driven platform.\n\nI've also applied my technical expertise to personal projects, including WalkSafe, a real-time tracking app that leverages React-Native and Flask to enhance user safety.  I engineered a route optimization algorithm that analyzes crime data to suggest secure paths, resulting in a 20% decrease in user-reported safety incidents.  This project demonstrates my ability to leverage machine learning and data analysis to solve real-world problems.\n\nFurthermore, my participation in hackathons has solidified my technical prowess and problem-solving skills.  I secured first place in both the Code Crush 1.0 Hackathon and the CuseHacks Beta 2024 Hackathon, showcasing my ability to rapidly learn new technologies and develop innovative solutions. \n\nI'm eager to bring my passion for AI and NLP, combined with my proven experience in developing user-centric applications, to Cohere. I'm confident that I can contribute meaningfully to your team and learn from the best in the industry."
  // );
  // const [resumeBody, setResumeBody] = useState("Resume Body");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <Document
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            width: "100%",
          }}
          title={companyName}
        >
          <Page size='A4' style={styles.page}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Cover Letter
            </Text>
            <View style={styles.section}>
              <Text
                style={{
                  marginTop: 10,
                }}
              >
                {coverLetterBody}
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: "Helvetica",
  },
  section: {
    margin: 15,
    padding: 10,
    flexGrow: 1,
    textAlign: "justify",
    fontSize: 12,
  },
});
