import ViewContainer from 'components/ViewContainer'
import Heading from 'components/Heading'
import Button from "components/Button"
import { useRouter } from 'next/router'
const NotFoundIcon = () => (
  <div style={{color: "#F231A5", maxWidth:"60%", margin:"0 auto"}}>
   <svg viewBox="0 0 96 96" >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        strokeLinejoin="round"
        d="M53 63c2.02 1.318 7.757 2.091 13 2.042M43 63c-2.02 1.318-7.757 2.091-13 2.042M44 20V2h8v33h-8v-5m-1 32.75c0-2.761 2.239-4.75 5-4.75s5 1.989 5 4.75V68H43v-5.25z"
        fill="currentColor"

      />
      <circle
        cx={31}
        cy={85}
        r={3}
        strokeLinejoin="round"
        transform="rotate(-45.001 31 85)"
        stroke="currentColor"
      />
      <circle
        cx={65}
        cy={85}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        transform="rotate(-45.001 65 85.001)"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M34 85h28m-29.172-2.828L43 67m20.172 15.172L53 67m-5 1v17m-6-16v15m12-15v16m6-7v7m-24-7v7m5.882-41.722c1.069 1.177 1.037 5.333 1.037 5.333s.143 5.395-1.037 6.176c-3.712 2.457-17.58 3.178-20.714 0-3.134-3.178.199-8.722 4.013-11.509 4.115-3.008 13.699-3.306 16.701 0zm12.086 0c-1.069 1.177-1.037 5.333-1.037 5.333s-.143 5.395 1.037 6.176c3.712 2.457 17.58 3.178 20.714 0 3.134-3.178-.199-8.722-4.013-11.509-4.115-3.008-13.698-3.306-16.701 0z"
      />
      <path d="M67.121 82.879l7.712-13.293M26.91 19.433c4.31-4.664 10.376-7.836 17.09-8.804M21.873 27.227c.399-.943.85-1.858 1.349-2.74m5.657 58.392l-7.712-13.293m54.931 13.371C83 82 91.903 78.837 93.225 78.149m-73 4.808C13.323 82 4.098 78.762 2.776 78.074M83 45s-8.333-18.167-31-10M13 45s8.333-18.167 31-10"
      stroke="currentColor"
       />
      <path d="M44 4.231C26.568 6.234 13 21.037 13 39v6L3.364 76.343c-1.781 4.782-2.333 9.574 1.01 11.314C14.157 92.749 36.893 94 47.995 94s33.836-1.251 43.619-6.343c3.343-1.74 2.782-6.532 1.001-11.314L82.959 45 83 40.031 82.959 39C82.959 21.037 69.427 6.234 52 4.231" stroke="currentColor" />
    </g>
  </svg>
  </div>
);

export default function NotFound() {
  const router = useRouter()
  return <ViewContainer>
    <Heading as="h1" size="large" lineBottom>404</Heading>
    <NotFoundIcon/>
    <Heading as="h2" size="medium" >These are not the droids you are looking for</Heading>
    <Button onClick={() => router.push("/")}>Go to home</Button>
  </ViewContainer>
}
