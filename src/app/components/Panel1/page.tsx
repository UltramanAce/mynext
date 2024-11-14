import styles from './page.module.scss';
import Image from 'next/image';

const Panel1 = () => {
  return (
    <div className={styles.wrap}>
      <Image
        src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/162869/14/49989/101420/671f2c94Fcc5ce1cb/9590178e127f4d21.jpg"
        alt="商品图"
        width={200}
        height={150}
      />
      <div className={styles.content}>
        <h2>无印良品A类抗菌珊瑚绒毛巾超细纤维加厚柔软吸水不易掉毛速干洗脸洗澡 云柔抗菌【随机颜色1条】</h2>
      </div>
      <div className={styles.price}>
        ￥199.00
      </div>
    </div>
  );
};

export default Panel1;