import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      display: 'flex',
      backgroundColor: '#E4E4E4',
      fontFamily: 'Helvetica',
      padding: '50px',
      fontSize: 12,
    },
    title: {     
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Helvetica-Bold',
      marginBottom: '20px',
    },
    evidenceTitle: {     
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Helvetica-Bold',
      marginBottom: '20px',
    },
    subTitle: {
      fontFamily: 'Helvetica-Bold',
      marginBottom: '8px'
    },
    eviBlock: {
      marginBottom: '12px'
    },
    section: {
      marginBottom: '8px'
    }
  });

  const ArgMapReport = ({title, evidence, reasoning, conclusion}) => (
    <PDFViewer>
      <Document>
        <Page size="letter" style={styles.page}>
          <View style={styles.title}>
            <Text>{title}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subTitle}>Conclusion:</Text>
            <Text>{conclusion}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subTitle}>Reasoning:</Text>
            <Text>{reasoning}</Text>
          </View>
        </Page>

        <Page size="letter" style={styles.page}>
          <View style={styles.evidenceTitle}>
            <Text>Evidence</Text>
          </View>

          {evidence.map((evi) => (
            <View key={evi.id} style={styles.eviBlock}>
              <View style={styles.subTitle}>
                <Text>{evi.title}</Text>
              </View>
              <View style={styles.section}>
                <Text>{evi.body}</Text>
              </View>   
              <View style={styles.section}>
              <Text>Source: <Link src={evi.source}>{evi.source}</Link></Text>
            </View>
          </View>                       
          ))}

        </Page>
      </Document>
    </PDFViewer>
  )
export default ArgMapReport;