import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>PERCENTAGE NFT Staking</h1>
      <div className={styles.nftBoxGrid}>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.png" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Use your PERCENTAGE NFT for <b>Stake</b> <br />
            You will earn $PERCENT tokens from the <b>PERCENTAGE</b> staking contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
