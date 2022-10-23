import { waitForTheElement } from "wait-for-the-element";

const tabTexts = {
  active: "Testing...",
  inactive: "Test",
};
const tabTextWrapperClassName = {
  active: "eKkyLe",
  inactive: "kfuKtQ",
};
const tabWrapperClassName = {
  active: "bvruMV",
  inactive: "gcMVlg",
};
const tabLine = document.createElement("div");
tabLine.dataset.testSelector = "ACTIVE_TAB_INDICATOR";
tabLine.classList.add("ScActiveIndicator-sc-i1y2af-1", "iaTrsR");

let active = false;

function activateTab(
  a: HTMLAnchorElement,
  tabWrapper: HTMLDivElement,
  tabTextWrapper: HTMLDivElement,
  tabText: HTMLParagraphElement,
  tabLineWrapper: HTMLDivElement
): (e: MouseEvent) => Promise<void> {
  return async (e) => {
    e.preventDefault();

    const propertyAfter = active ? "inactive" : "active";
    const propertyBefore = active ? "active" : "inactive";
    tabText.innerText = tabTexts[propertyAfter];
    tabWrapper.classList.remove(tabWrapperClassName[propertyBefore]);
    tabWrapper.classList.add(tabWrapperClassName[propertyAfter]);
    tabTextWrapper.classList.remove(tabTextWrapperClassName[propertyBefore]);
    tabTextWrapper.classList.add(tabTextWrapperClassName[propertyAfter]);

    if (active) {
      active = false;
      tabLineWrapper.removeChild(tabLine);
      a.setAttribute("aria-selected", "false");
    } else {
      active = true;
      tabLineWrapper.appendChild(tabLine);
      a.setAttribute("aria-selected", "true");
    }
  };
}

async function addTab(): Promise<void> {
  const tabText = document.createElement("p");
  tabText.classList.add(
    "CoreText-sc-cpl358-0",
    "ScTitleText-sc-1gsen4-0",
    "fiLmJS",
    "gasGNr",
    "tw-title"
  );
  tabText.innerText = tabTexts.inactive;

  const tabTextWrapper = document.createElement("div");
  tabTextWrapper.appendChild(tabText);
  tabTextWrapper.classList.add(
    "ScTextWrapper-sc-18v7095-1",
    tabTextWrapperClassName.inactive
  );

  const tabLineWrapper = document.createElement("div");
  tabLineWrapper.classList.add("Layout-sc-nxg1ff-0", "kxtmAi");

  const tabWrapper = document.createElement("div");
  tabWrapper.appendChild(tabTextWrapper);
  tabWrapper.appendChild(tabLineWrapper);
  tabWrapper.classList.add("Layout-sc-nxg1ff-0", tabWrapperClassName.inactive);

  const a = document.createElement("a");
  a.appendChild(tabWrapper);
  a.setAttribute("role", "tab");
  a.setAttribute("aria-selected", "false");
  a.setAttribute("tabindex", "2");
  a.classList.add(
    "ScInteractive-sc-18v7095-0",
    "kMHbQR",
    "InjectLayout-sc-588ddc-0",
    "dgbOCY"
  );

  a.onclick = activateTab(
    a,
    tabWrapper,
    tabTextWrapper,
    tabText,
    tabLineWrapper
  );

  const li = document.createElement("li");
  li.appendChild(a);
  li.setAttribute("role", "presentation");
  li.dataset.index = "2";
  li.classList.add("InjectLayout-sc-588ddc-0", "cZIUCO");

  const tabList: HTMLUListElement = await waitForTheElement(
    "#twilight-sticky-header-root ul"
  );
  tabList.appendChild(li);
}

let initialized = false;

export const initialize = async () => {
  if (initialized) {
    return;
  }

  await addTab();
  initialized = true;
};
