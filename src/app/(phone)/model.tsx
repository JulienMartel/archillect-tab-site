"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    lxsKwuOPNvmzBKg_0: THREE.Mesh;
    FjhETOCBEeiBmch: THREE.Mesh;
    AbxQOpRbGREHXRG: THREE.Mesh;
    alSOKOYgFKIcUtR: THREE.Mesh;
    tWfjYtMZCfucxRt: THREE.Mesh;
    Screen001: THREE.Mesh;
    YbXWdqEcjbfTKuN_0: THREE.Mesh;
    rrqFqyfckTuyRuI: THREE.Mesh;
    XbtrdVaOWYmkEiU: THREE.Mesh;
    JUTNJcWwqyxbGDZ_0: THREE.Mesh;
    BDLCJBydsNjizog_0: THREE.Mesh;
    GWEiavWnRxbogtw_0: THREE.Mesh;
    RFqaqXLpuCDBIGV_0: THREE.Mesh;
    tWBbDznHihIxXam: THREE.Mesh;
    tQCDizUpBYNcvFA: THREE.Mesh;
    CAQeTxdpUcbxQyT: THREE.Mesh;
    lgnGJJmNebyRbHq_0: THREE.Mesh;
    qsTxqfACkdoWeLQ: THREE.Mesh;
    aVmapfDgqkPkjUf: THREE.Mesh;
    zPPSOvNamLQVyvv: THREE.Mesh;
    YPGjoywokSeoQFr: THREE.Mesh;
    MoTJNOoMxqdxNvQ: THREE.Mesh;
    mZxrNiCtMrMjOMv: THREE.Mesh;
    BeQtuLXtpSTrzAH: THREE.Mesh;
    QaGkMzxNzKPcqRy: THREE.Mesh;
    RUMRNTkptJGDMpy: THREE.Mesh;
    KUDomTaVduCyevu: THREE.Mesh;
    QOfJIBEXOvXfSUh: THREE.Mesh;
    aYjPeBrpBRopJbp: THREE.Mesh;
    nJYGEbPQybRBbiN: THREE.Mesh;
    RGbIswEcCTzqNsn_0: THREE.Mesh;
    XeFHhVBtRZWPGxR: THREE.Mesh;
    dNDonqESZOxUcei_0: THREE.Mesh;
    IuMgFUHIyRWENxG_0: THREE.Mesh;
    oCklTGvTZoDWJrC_0: THREE.Mesh;
    nxFoHsySvfcSLvp: THREE.Mesh;
    JyAbjubWrOdfygC_0: THREE.Mesh;
    BhvzCWikxrVeDTV: THREE.Mesh;
    ePYqawqlCJbCsNi: THREE.Mesh;
    FGDSbHbILfUmiaH: THREE.Mesh;
    MMkajxMNWrwGQfi: THREE.Mesh;
    qjXEDwnnBYwWcJn: THREE.Mesh;
    YnrVhXEUDbStWCs: THREE.Mesh;
    FaUtifOQSMTXiZM: THREE.Mesh;
    knexoFNknstHgiO: THREE.Mesh;
    jQXfQpudiYObSGp: THREE.Mesh;
    KABLQLZRuEbcLWk: THREE.Mesh;
    DLfIUIalXuQjJsL: THREE.Mesh;
    OMkeKbwVHRBkBwM: THREE.Mesh;
    rJeCWUNsVVXXAbI: THREE.Mesh;
    vauUojKrKkLLDtY: THREE.Mesh;
    wjSYkRykuFHJNPw: THREE.Mesh;
    yqmgDmvGsmuPwXx_0: THREE.Mesh;
    rqSonbcVVSPWFfa_0: THREE.Mesh;
    UCttAeyROPsgmix: THREE.Mesh;
  };
  materials: {
    KhJiSWFcsscOusf: THREE.MeshStandardMaterial;
    KtvhjlxyToKjYkE: THREE.MeshStandardMaterial;
    IDdMwJVCyuFpUnA: THREE.MeshStandardMaterial;
    sWxYOtHGWTcXRMx: THREE.MeshStandardMaterial;
    fdfRsQCrfvPBPfQ: THREE.MeshStandardMaterial;
    ["Material_29.001"]: THREE.MeshStandardMaterial;
    ["GFNYbWjyDVGUwJd.001"]: THREE.MeshStandardMaterial;
    CSNzlRnZuvCyxNL: THREE.MeshStandardMaterial;
    YiceMpFVTpnmoaq: THREE.MeshStandardMaterial;
    LJBezuBxKRoHnAp: THREE.MeshStandardMaterial;
    fGwijctGaiRaYJC: THREE.MeshStandardMaterial;
    FsunUcGyajFpQmW: THREE.MeshStandardMaterial;
    nJRBoEsOhzMSqCz: THREE.MeshStandardMaterial;
    OStzgRHtVBLWwiD: THREE.MeshStandardMaterial;
    LtesZnUOMbBEAoi: THREE.MeshStandardMaterial;
    rNCplyWedyfORFh: THREE.MeshStandardMaterial;
    IBtgGxCVyZhjKZM: THREE.MeshStandardMaterial;
    WqbAhnIPgrrhfXS: THREE.MeshStandardMaterial;
    qEGySvwsouNnVcn: THREE.MeshStandardMaterial;
    initialShadingGroup: THREE.MeshStandardMaterial;
    iEhZxWeNLTDdgxm: THREE.MeshStandardMaterial;
    vsSJQngPxBJTVZb: THREE.MeshStandardMaterial;
    xHgtbqndQshkTKG: THREE.MeshStandardMaterial;
    tDZQoaroJfCIQtF: THREE.MeshStandardMaterial;
    FlDKBWPodPcEeGy: THREE.MeshStandardMaterial;
    tfbCjiZQaZkmtHx: THREE.MeshStandardMaterial;
    LUbRMhkIhuekQRK: THREE.MeshStandardMaterial;
    LcWBQfBvCzxThpp: THREE.MeshStandardMaterial;
    jFPFAvCbiqflbQV: THREE.MeshStandardMaterial;
    EJpkIDZfhPDUzel: THREE.MeshStandardMaterial;
    pBMikDFQfUOsKkr: THREE.MeshStandardMaterial;
    IkWzRHNnDaKQXIi: THREE.MeshStandardMaterial;
    psePdsxZprlxGrw: THREE.MeshStandardMaterial;
    HvAGJeQTAiWbceX: THREE.MeshStandardMaterial;
    KxzouvBYEgdZhMo: THREE.MeshStandardMaterial;
    bmOZLlCkCKhIIVe: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/compressed.glb") as GLTFResult;

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -0.08, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lxsKwuOPNvmzBKg_0.geometry}
            material={materials.KhJiSWFcsscOusf}
            position={[0, 0, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FjhETOCBEeiBmch.geometry}
            material={materials.KtvhjlxyToKjYkE}
            position={[0, 0, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AbxQOpRbGREHXRG.geometry}
            material={materials.IDdMwJVCyuFpUnA}
            position={[0, 0, -0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.alSOKOYgFKIcUtR.geometry}
            material={materials.sWxYOtHGWTcXRMx}
            position={[0, 0, -0.08]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tWfjYtMZCfucxRt.geometry}
            material={materials.fdfRsQCrfvPBPfQ}
            position={[0, 0, -0.07]}
          />
          <group
            position={[0, 7.2, 0.07]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.03}
          >
            <group position={[-0.3, 20.85, -4.12]}>
              <group position={[0.1, 7.83, 4.12]}>
                <group
                  position={[10.63, 18.95, 0.83]}
                  scale={[1.02, 1.02, 1.04]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen001.geometry}
                    material={materials["Material_29.001"]}
                    position={[-10.45, -18.61, 15.07]}
                    scale={[0.98, 0.99, 0.96]}
                  />
                </group>
              </group>
            </group>
          </group>
          <group
            position={[0, 0, -0.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.YbXWdqEcjbfTKuN_0.geometry}
                material={materials["GFNYbWjyDVGUwJd.001"]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rrqFqyfckTuyRuI.geometry}
            material={materials.CSNzlRnZuvCyxNL}
            position={[0, 0, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.XbtrdVaOWYmkEiU.geometry}
            material={materials.YiceMpFVTpnmoaq}
            position={[0, 0, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry}
            material={materials.LJBezuBxKRoHnAp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BDLCJBydsNjizog_0.geometry}
            material={materials.fGwijctGaiRaYJC}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GWEiavWnRxbogtw_0.geometry}
            material={materials.FsunUcGyajFpQmW}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RFqaqXLpuCDBIGV_0.geometry}
            material={materials.nJRBoEsOhzMSqCz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tWBbDznHihIxXam.geometry}
            material={materials.OStzgRHtVBLWwiD}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tQCDizUpBYNcvFA.geometry}
            material={materials.LtesZnUOMbBEAoi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CAQeTxdpUcbxQyT.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lgnGJJmNebyRbHq_0.geometry}
            material={materials.rNCplyWedyfORFh}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.qsTxqfACkdoWeLQ.geometry}
            material={materials.IBtgGxCVyZhjKZM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aVmapfDgqkPkjUf.geometry}
            material={materials.WqbAhnIPgrrhfXS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.zPPSOvNamLQVyvv.geometry}
            material={materials.qEGySvwsouNnVcn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.YPGjoywokSeoQFr.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MoTJNOoMxqdxNvQ.geometry}
            material={materials.IBtgGxCVyZhjKZM}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mZxrNiCtMrMjOMv.geometry}
            material={materials.WqbAhnIPgrrhfXS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BeQtuLXtpSTrzAH.geometry}
            material={materials.initialShadingGroup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.QaGkMzxNzKPcqRy.geometry}
            material={materials.iEhZxWeNLTDdgxm}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RUMRNTkptJGDMpy.geometry}
            material={materials.LJBezuBxKRoHnAp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.KUDomTaVduCyevu.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.QOfJIBEXOvXfSUh.geometry}
            material={materials.vsSJQngPxBJTVZb}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.aYjPeBrpBRopJbp.geometry}
            material={materials.xHgtbqndQshkTKG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nJYGEbPQybRBbiN.geometry}
            material={materials.tDZQoaroJfCIQtF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RGbIswEcCTzqNsn_0.geometry}
            material={materials.FlDKBWPodPcEeGy}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.XeFHhVBtRZWPGxR.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dNDonqESZOxUcei_0.geometry}
            material={materials.LUbRMhkIhuekQRK}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.IuMgFUHIyRWENxG_0.geometry}
            material={materials.LcWBQfBvCzxThpp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.oCklTGvTZoDWJrC_0.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nxFoHsySvfcSLvp.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JyAbjubWrOdfygC_0.geometry}
            material={materials.jFPFAvCbiqflbQV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BhvzCWikxrVeDTV.geometry}
            material={materials.LtesZnUOMbBEAoi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ePYqawqlCJbCsNi.geometry}
            material={materials.CSNzlRnZuvCyxNL}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FGDSbHbILfUmiaH.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MMkajxMNWrwGQfi.geometry}
            material={materials.LtesZnUOMbBEAoi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.qjXEDwnnBYwWcJn.geometry}
            material={materials.tfbCjiZQaZkmtHx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.YnrVhXEUDbStWCs.geometry}
            material={materials.EJpkIDZfhPDUzel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FaUtifOQSMTXiZM.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.knexoFNknstHgiO.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.jQXfQpudiYObSGp.geometry}
            material={materials.sWxYOtHGWTcXRMx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.KABLQLZRuEbcLWk.geometry}
            material={materials.fdfRsQCrfvPBPfQ}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DLfIUIalXuQjJsL.geometry}
            material={materials.pBMikDFQfUOsKkr}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.OMkeKbwVHRBkBwM.geometry}
            material={materials.IkWzRHNnDaKQXIi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rJeCWUNsVVXXAbI.geometry}
            material={materials.psePdsxZprlxGrw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vauUojKrKkLLDtY.geometry}
            material={materials.HvAGJeQTAiWbceX}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wjSYkRykuFHJNPw.geometry}
            material={materials.KxzouvBYEgdZhMo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.yqmgDmvGsmuPwXx_0.geometry}
            material={materials.bmOZLlCkCKhIIVe}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rqSonbcVVSPWFfa_0.geometry}
            material={materials.jFPFAvCbiqflbQV}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.UCttAeyROPsgmix.geometry}
            material={materials.KtvhjlxyToKjYkE}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/phone.glb");
