import { TextylEditor, TextylToolbar } from "textyle";

function App() {
  const onChange = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div
        style={{
          marginInline: "auto",
          maxWidth: "1124px",
          marginTop: "150px",
          border: "solid 1px black",
          padding: "12px",
        }}
      >
        <TextylToolbar />
        <hr />
        <div>
          <TextylEditor
            onChange={onChange}
            placeholder="Start Typing Here. you cna also include #hashtags"
          />
        </div>
      </div>
    </>
  );
}

export default App;
