import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>GACUAN NFT Staking</h1><br /><br />
      <div className={styles.nftBoxGrid}>

        {/* KOTAK 1 */}
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/royal-stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/1.png" alt="token" width={260} height={260} />
          <br />
          <button
           className={styles.buttonStyles}
          >
            Check Now
          </button>
          {/* <p className={styles.selectBoxDescription}>
            Use your GACUAN NFT for <b>Stake</b> <br />
            You will earn $PERCENT tokens from the <b>PERCENTAGE</b> staking contract.
          </p> */}
        </div>

        {/* KOTAK 2 */}
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/atlantis-stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/2.png" alt="token" width={260} height={260} />
          {/* <h3 className={styles.selectBoxTitle}>Atlantis NFT Stake</h3> */}
          <br />
          <button
           className={styles.buttonStyles}
          >
            Check Now
          </button>
          {/* <p className={styles.selectBoxDescription}>
            Use your GACUAN NFT for <b>Stake</b> <br />
            You will earn $PERCENT tokens from the <b>PERCENTAGE</b> staking contract.
          </p> */}
        </div>

        {/* KOTAK 3 */}
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/paramesh-stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/3.png" alt="token" width={260} height={260} />
          {/* <h3 className={styles.selectBoxTitle}>Paramesh NFT Stake</h3> */}
          <br />
          <button
           className={styles.buttonStyles}
          >
            Check Now
          </button>
          {/* <p className={styles.selectBoxDescription}>
            Use your GACUAN NFT for <b>Stake</b> <br />
            You will earn $PERCENT tokens from the <b>PERCENTAGE</b> staking contract.
          </p> */}
        </div>

        {/* KOTAK 4 */}
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/residence-stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/4.png" alt="token" width={260} height={260} />
          {/* <h3 className={styles.selectBoxTitle}>Paramesh NFT Stake</h3> */}
          <br />
          <button
           className={styles.buttonStyles}
          >
            Check Now
          </button>
          {/* <p className={styles.selectBoxDescription}>
            Use your GACUAN NFT for <b>Stake</b> <br />
            You will earn $PERCENT tokens from the <b>PERCENTAGE</b> staking contract.
          </p> */}
        </div>

        {/* KOTAK 5 */}
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/universe-stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/5.png" alt="token" width={260} height={260} />
          {/* <h3 className={styles.selectBoxTitle}>Paramesh NFT Stake</h3> */}
          <br />
          <button
           className={styles.buttonStyles}
          >
            Check Now
          </button>
          {/* <p className={styles.selectBoxDescription}>
            Use your GACUAN NFT for <b>Stake</b> <br />
            You will earn $PERCENT tokens from the <b>PERCENTAGE</b> staking contract.
          </p> */}
        </div>

      </div>
    </div>
  );
};

export default Home;
