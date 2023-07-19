import { useDispatch, useSelector } from "react-redux";
import { handleOninput, handlePreview } from "./markdownSlice";
import { marked } from "marked";
import { useEffect } from "react";

export function Markdown() {
    
    const mark = useSelector((state) => state.markdown.output);
    const initial = useSelector((state) => state.markdown.input);
    const dispatch = useDispatch();
    const handleOutput = () => {
        dispatch(handlePreview());
    }
    const handleEvent = () => {
        dispatch(handleOninput(document.getElementById('editor').value));
        handleOutput();
    }
    const html = marked(mark);
    useEffect(() => {
        document.getElementById('editor').value = initial;
        handleOutput();
    }, 
    // eslint-disable-next-line
    []);

    return(
        <div>
            <br />
            <div class="container ">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8 ">
                        <div class="card bg-info-subtle">
                            <div class="card-header bg-info">
                                Input
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <textarea rows="7" id="editor" onInput={handleEvent} class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <br />
            <div class="container ">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8 ">
                        <div class="card ">
                            <div class="card-header bg-info">
                                Output
                            </div>
                            <div class="card-body bg-info-subtle">
                                <div class="myDiv w-100" id="preview" dangerouslySetInnerHTML={{ __html: html }} />
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <br />
        </div>
    );
}
export default Markdown;
