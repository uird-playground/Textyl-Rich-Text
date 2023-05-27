import {
  TextylBold,
  TextylEditor,
  TextylUnderline,
  TextylItalic,
  TextylStrike,
  TextylAlignLeft,
  TextylAlignCenter,
  TextylAlignRight,
  TextSizeSelect,
  TextylImage,
  TextylLink,
} from "../../src";

function App() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            gap: "3px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <TextylBold />
          <TextylUnderline />
          <TextylItalic />
          <TextylStrike />
          <TextylAlignLeft />
          <TextylAlignCenter />
          <TextylAlignRight />
          <TextSizeSelect />
          <TextylImage />
          <TextylLink />
        </div>
        <div
          style={{
            marginInline: "auto",
            maxWidth: "40rem",
            marginTop: "150px",
          }}
        >
          <TextylEditor />
        </div>
      </div>
    </>
  );
}

export default App;
