import { useEffect } from "react";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "140596266",
          formId: "4b72da46-9295-4490-94c4-651967cbf87c",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;

/*
Form 1: (embedded)
<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "eu1",
    portalId: "140596266",
    formId: "4b72da46-9295-4490-94c4-651967cbf87c"
  });
</script>

form 2 (standalone)
 portalId: "140596266",
          formId: "3db77c1c-0a6b-47c6-b38d-dc4336fa1bd9",
*/
