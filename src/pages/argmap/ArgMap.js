import MenuBar from "../../components/argmap/MenuBar";
import Title from "../../components/argmap/Title";
import Evidence from "../../components/argmap/Evidence";
import Reasoning from "../../components/argmap/Reasoning";
import Conclusion from "../../components/argmap/Conclusion";

const ArgMap = ({title, setTitle, evidence, setEvidence, evidenceId, setEvidenceId,reasoning, setReasoning, conclusion, setConclusion}) => {

    const addEvidence = () => {
        setEvidenceId(evidenceId + 1);
        const evidenceItem = {title: "Evidence " + evidenceId, body: "The evidence states that...", source: "https://www.google.com/", id: evidenceId};
        setEvidence([...evidence, evidenceItem]);
    }
    
    const deleteEvidence = (id) => {
        const filteredList = evidence.filter((t) => t.id !== id);
        setEvidence(filteredList);
    }

    const updateEvidence = (title, body, source, id) => {
        let updatedEvidence = [...evidence];
        let evidenceItem = updatedEvidence.find(t => t.id === id);
        if (evidenceItem) {
            evidenceItem.title = title;
            evidenceItem.body = body;
            evidenceItem.source = source;
            evidenceItem.id = id;
        }
        setEvidence(updatedEvidence);        
    }
    
    const save = () => {
        const fileContents = [ {title}, {evidence}, {evidenceId}, {reasoning}, {conclusion}];
        const output = JSON.stringify(fileContents, null, 4);

        const blob = new Blob([output]);
        let fileDownloadUrl = URL.createObjectURL(blob);

        let tempLink = document.createElement('a');
        tempLink.href = fileDownloadUrl;
        tempLink.setAttribute('download', (!title? "untitled": title) + '.argmap');
        tempLink.click();

        URL.revokeObjectURL(fileDownloadUrl);
        fileDownloadUrl = ""; 
    }
    
    const upload = () => {
        let input = document.createElement("input");
        input.type = "file";
        input.accept = ".argmap";

        let file  =  new Promise(function(resolve) {
            document.activeElement.onfocus = function() {
            document.activeElement.onfocus = null;
            };
            input.onchange = function() {
            var files = Array.from(input.files);
            resolve(files[0]);
            };
            input.click();
        });

        file.then(
            function(value) {
                try {
                    let read = new FileReader();
                    read.readAsText(value);
                    read.onloadend = function(){
                        try {
                            let fileObjectContents = JSON.parse(read.result);
                            if ((fileObjectContents === 'undefined' || fileObjectContents.constructor !== Array) ||
                                (fileObjectContents[0] === 'undefined' || fileObjectContents[0].title === 'undefined' || typeof fileObjectContents[0].title !== 'string') || 
                                (fileObjectContents[1] === 'undefined' || fileObjectContents[1].evidence === 'undefined' || fileObjectContents[1].evidence.constructor !== Array) ||  
                                (fileObjectContents[2] === 'undefined' || fileObjectContents[2].evidenceId === 'undefined' || typeof fileObjectContents[2].evidenceId !== 'number') ||
                                (fileObjectContents[3] === 'undefined' || fileObjectContents[3].reasoning === 'undefined' || typeof fileObjectContents[3].reasoning !== 'string') ||
                                (fileObjectContents[4] === 'undefined' || fileObjectContents[4].conclusion === 'undefined' || typeof fileObjectContents[4].conclusion !== 'string')) 
                            {                            
                                alert("File is corrupted!");
                                return;   
                            }
                            else {
                                setTitle(fileObjectContents[0].title);
                                setEvidence(fileObjectContents[1].evidence);
                                setEvidenceId(fileObjectContents[2].evidenceId);
                                setReasoning(fileObjectContents[3].reasoning);
                                setConclusion(fileObjectContents[4].conclusion);                            
                            }
                        }
                        catch (e) {
                            console.log(e);
                            alert("File is corrupted!");
                            return;
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                    alert("File is corrupted!");
                    return;
                }
                
            },
            function(error) { 
                console.log(error);
                alert("File is corrupted!");
            }
        );       
    }
    
    return ( 
        <div className="argmap">
            <MenuBar addEvidence={addEvidence} save={save} upload={upload} />            
            <div className="whiteboard">

                <Title title={title} setTitle={setTitle}/>

                <div className="card-group evidence-group">
                    {evidence.map((evi) => (
                        <Evidence title={evi.title} body={evi.body} source={evi.source} key={evi.id} id={evi.id} deleteEvidence={deleteEvidence} updateEvidence={updateEvidence}/>
                    ))}
                </div>

                <div className="card my-card">
                    <div className="card-header my-card-header">Reasoning</div>
                    <Reasoning reasoning={reasoning} setReasoning={setReasoning}/>
                </div>

                <div className="card my-card">
                    <div className="card-header my-card-header">Conclusion</div>
                    <Conclusion conclusion={conclusion} setConclusion={setConclusion} />
                </div>

            </div>
             
        </div>
     );
}
 
export default ArgMap;