import { TextylEditor, TextylToolbar } from "../../src/index";

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
            initialValue="Heelo <u>there</u><p>gfdgfdgfd</p><p>ret<b>retret</b>retre</p><p><ul><li>one</li><li>two</li><li>three</li></ul></p>"
            placeholder="Start Typing Here. you can also include #hashtags"
          />
        </div>
      </div>
    </>
  );
}

export default App;
