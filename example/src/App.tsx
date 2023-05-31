import {
  TextylBold,
  TextylEditor,
  TextylUnderline,
  TextylItalic,
  TextylStrike,
  TextylAlignLeft,
  TextylAlignCenter,
  TextylAlignRight,
  TextylHeading,
  TextylImage,
  TextylLink,
  TextylHR,
  TextylOrderedList,
  TextylUnorderedList,
  TextylIndent,
  TextylOutdent,
  TextylFontFamily,
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
          <TextylHeading />
          <TextylFontFamily />
          <TextylImage />
          <TextylLink />
          <TextylHR />
          <TextylOrderedList />
          <TextylUnorderedList />
          <TextylIndent />
          <TextylOutdent />
        </div>
        <div
          style={{
            marginInline: "auto",
            maxWidth: "40rem",
            marginTop: "150px",
          }}
        >
          <TextylEditor placeholder="Start Typing Here. you cna also include #hashtags" />
        </div>
      </div>
    </>
  );
}

export default App;
