import { Link } from "react-router-dom";

const ArgMapInstructions = () => {
    return ( 
        <div className="instructions">
            <div className="card my-card">
                <div className="card-header my-card-header">ArgMap Instructions</div>
                <div className="card-body my-card-body">
                    <h5>Teaching in the age of Generative Artificial Intelligence</h5>
                    <p>The age of generative AI has changed the teaching landscape. Student can now easily use it to complete their assignments. Argument Mapping has been shown to improve critical thinking skills and Gredisoft ArgMap is a solution to continue to improve students' cognitive abilities in the age of generative articifial intelligence.</p>
                    <p>ArgMap tests students' abilities to follow the thinking process of reasoning from evidence to conclusion.</p>
                    <h6>To edit an element (Title, Reasoning, Conclusion):</h6>
                    <ul>
                        <li>Click twice on the text that you want to edit</li>
                        <li>Edit the text</li>
                        <li>Click anywhere outside the editor to update</li>
                    </ul>

                    <h6>To edit an Evidence item:</h6>
                    <ul>
                        <li>Click on the Evidence item that you want to edit</li>
                        <li>Edit the Evidence title, body and source</li>
                        <li>Click anywhere outside the editor to update</li>
                    </ul>

                    <h6>To add Evidence items:</h6>
                    <ul>
                        <li>Click on the yellow "+ Add Evidence" button on the top left.</li>
                    </ul>

                    <h6>To delete an Evidence item:</h6>
                    <ul>
                        <li>Click on the trash can icon on the top right of the evidence item</li>
                    </ul>

                    <h6>To save an argmap file for later editing:</h6>
                    <ul>
                        <li>Click on the "Save" button</li>
                    </ul>

                    <h6>To upload a previously saved argmap file:</h6>
                    <ul>
                        <li>Click on the "Upload" button</li>
                        <li>Navigate to and select the file from your computer</li>
                    </ul>

                    <h6>To generate a PDF Report:</h6>
                    <ul>
                        <li>Click on the "Generate Report" button</li>
                    </ul>
                    <Link to="/argmap">&lt; Back to ArgMap</Link>
                </div>
            </div>
            
        </div>
     );
}
 
export default ArgMapInstructions;