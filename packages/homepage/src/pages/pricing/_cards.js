import React from "react";
import track from "@codesandbox/common/lib/utils/analytics";
import { Link } from "gatsby";

import {
  Card,
  CardTitle,
  Price,
  PriceSubText,
  List,
  Button,
  CardContainer,
} from "./_elements";

const makeLink = (product, mode) => {
  let link = "pro?";
  if (product === "personal") {
    link += "type=PERSONAL_PRO";
  } else {
    link += "type=TEAM_PRO";
  }

  if (mode === "monthly") {
    link += "&interval=MONTHLY";
  } else {
    link += "&interval=YEARLY";
  }

  return link;
};

export const TeamCards = ({ mode }) => (
  <CardContainer teams>
    <Card
      css={`
        border-top: solid 10px #ac9cff;
      `}
    >
      <div>
        <div
          css={`
            height: 155px;
          `}
        >
          <CardTitle
            css={`
              color: #ac9cff;
            `}
          >
            Team Pro
          </CardTitle>
          <Price>${mode === "monthly" ? 30 : 24}</Price>
          <PriceSubText>
            per editor/team/billed {mode === "monthly" ? "monthly" : "annually"}{" "}
            <br />
            or ${mode === "annually" ? 30 : 24} per month billed{" "}
            {mode === "annually" ? "monthly" : "annually"}
          </PriceSubText>
        </div>
        <List>
          <li
            css={`
              font-weight: bold;
            `}
          >
            Collaborate with your team
          </li>
          <li>✓ Private sandboxes</li>
          <li>✓ Private GitHub repos</li>
          <li>✓ Private NPM packages</li>
          <li>✓ Advanced permissions</li>
          <li>✓ Unlimited viewers</li>
          <li>✓ Centralized billing</li>
        </List>
      </div>
      <Button
        css={`
          color: #151515;
          background: #ac9cff;
        `}
        onClick={() => track(`Subscribe to Pro Clicked`, { tab: "Business" })}
        href={makeLink("team", mode)}
      >
        Subscribe to Pro
      </Button>
    </Card>
    <Card
      css={`
        border-top: solid 10px #dcff50;
        transform: scale(1.05);
      `}
    >
      <div>
        <div
          css={`
            height: 155px;
          `}
        >
          <CardTitle
            css={`
              color: #dcff50;
            `}
            onCli
          >
            Organization
          </CardTitle>
          <Price>${mode === "monthly" ? 56 : 45}</Price>
          <PriceSubText>
            per editor/billed {mode === "monthly" ? "monthly" : "annually"}{" "}
            <br />
            Currently in private beta
          </PriceSubText>
        </div>
        <List>
          <li
            css={`
              font-weight: bold;
            `}
          >
            For large or multiple teams
          </li>
          <li>All in Team Pro, plus:</li>
          <li>+ SSO</li>
          <li>+ Multiple teams</li>
          <li>+ Team secrets</li>
          <li>+ Analytics</li>
          <li>+ Priority support</li>
        </List>
      </div>
      <Button
        css={`
          color: #151515;
          background: #dcff50;
        `}
        onClick={() =>
          track(`Subscribe to Organization Clicked`, { tab: "Business" })
        }
        href="https://airtable.com/shrlgLSJWiX8rYqyG"
      >
        Join the waitlist
      </Button>
    </Card>
    <Card
      css={`
        border-top: solid 10px #00b2ff;
      `}
    >
      <div>
        <div
          css={`
            height: 155px;
          `}
        >
          <CardTitle
            css={`
              color: #00b2ff;
            `}
          >
            Enterprise
          </CardTitle>
          <Price>Custom</Price>
          <PriceSubText>Tailored to your needs</PriceSubText>
        </div>
        <List>
          <li
            css={`
              font-weight: bold;
            `}
          >
            Custom deploy options & support
          </li>
          <li>All in Organization, plus:</li>
          <li>+ On-premise or private cloud</li>
          <li>+ Custom contract</li>
          <li>+ Dedicated account manager</li>
        </List>
      </div>
      <Button
        onClick={() =>
          track(`Subscribe to Enterprise Clicked`, { tab: "Business" })
        }
        css={`
          color: #151515;
          background: #00b2ff;
        `}
        href="mailto:support@codesandbox.io"
      >
        Contact us
      </Button>
    </Card>
  </CardContainer>
);

export const PersonalCards = ({ mode }) => (
  <CardContainer>
    <Card
      dark
      css={`
        border-top: solid 10px #252525;
      `}
    >
      <div>
        <div
          css={`
            height: 155px;
          `}
        >
          <CardTitle>Personal</CardTitle>
          <Price
            css={`
              min-height: 72px;
            `}
          >
            $0
          </Price>
        </div>
        <List>
          <li
            css={`
              font-weight: bold;
            `}
          >
            For learning & experimenting
          </li>
          <li>Free for individuals</li>
          <li>✓ All Platform features</li>
          <li>✓ Public sandboxes</li>
          <li>✓ Personal dashboard</li>
        </List>
      </div>
      <Button
        onClick={() =>
          track(`Subscribe to Personal Free Clicked`, { tab: "Individual" })
        }
        href="/s"
      >
        Get started, it’s free{" "}
      </Button>
    </Card>
    <Card
      css={`
        border-top: solid 10px #edffa5;
      `}
    >
      <div>
        <div
          css={`
            height: 155px;
          `}
        >
          <CardTitle
            css={`
              color: #edffa5;
            `}
          >
            Personal Pro
          </CardTitle>
          <Price>${mode === "monthly" ? 9 : 7}</Price>
          <PriceSubText>
            billed {mode === "monthly" ? "monthly" : "annually"} <br />
            or ${mode === "annually" ? 9 : 7} per month billed{" "}
            {mode === "annually" ? "monthly" : "annually"}
          </PriceSubText>
        </div>
        <List>
          <li
            css={`
              font-weight: bold;
            `}
          >
            For power-users & freelancers
          </li>
          <li>All in Personal, plus:</li>
          <li>+ Private sandboxes</li>
          <li>+ Private GitHub repos</li>
          <li>+ More storage space</li>
          <li>+ Higher upload limits</li>
          <li>+ Stricter sandbox permissions</li>
        </List>
      </div>
      <Button
        css={`
          background: #edffa5;
          color: #151515;
        `}
        onClick={() =>
          track(`Subscribe to Personal Pro Clicked`, { tab: "Individual" })
        }
        href={makeLink("personal", mode)}
      >
        Subscribe to Pro
      </Button>
    </Card>
  </CardContainer>
);

const Cards = ({ team, mode }) => (
  <>
    {team ? <TeamCards mode={mode} /> : <PersonalCards mode={mode} />}
    <p
      css={`
        color: ${(props) => props.theme.homepage.muted};
        text-align: center;
        font-size: 13px;
        margin-top: 16px;
      `}
    >
      Prices listed in USD. Taxes may apply. By using CodeSandbox you agree to
      our <Link to="legal/terms">terms</Link> and{" "}
      <Link to="legal/privacy">policies</Link>.
    </p>
  </>
);

export default Cards;